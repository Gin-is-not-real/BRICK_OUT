# BRICK OUT
- Scripts
- Canvas
- Classes
    - App
    - Paddle
    - Ball
    - Brick
    - Lvl

## Scripts 
**main**  
    - recuperation elements dom dev et du canvas
    - init du ctx
    - declaration frame (undefined)
    - instance App, Paddle, Ball
    - instance Lvl
    - App initLvl(lvlNum)

**eventsListeners**
    - declaration des fonctions du canvas
    - *declaration fonctions dev*

## Canvas
**mousemove**  
*Fait bouger le paddle si le jeu est en cours, et colle la balle dessus si le status est 'init'*
- SI state n'est pas stop
    - paddle move(e offsetX)
    - SI state = init
        - ball init()
    - App draw()

**click**
- SI state est `run`, `App.pause()`
- SI state est `stop`, `App.initBall()`
- SI state est `pause` ou `init`, `App.run()`
- stop propagation
***
## Classes 
***
### App
- state (*init, run, pause, stop)*

**clear()**
- fill canvas

**draw()**
- App clear()
- paddle, ball draw()

**initLvl(array lvlNum)**
- app state = init
- Lvl.init(array lvlNum)
- App.initBall()

**initBall()**
- app state = 'init'
- ball move()
- frame = 0 
- paddle, ball init()
- App draw()

**pause()**
- app state = pause
- cancel frame

**stop()**
- app state = stop
- cancel frame
- App clear()


### Paddle
- width, height
- color
- x, y

**init()**
*Initie le paddle a sa position et taille de départ*
- init x, y et width

**draw()**
*Dessine le paddle*
- fonctions du 2DContext

**move(x)**
*Lancée par 'mousemove' Place le paddle sous la souris, et gere les collisions avec les bords*
- x = e.offsetX
- replace x si depasse les limits


### Ball
- radius
- x, y
- vx, vy *(vitesses)*
- color

**init()**
*Place la balle sur le paddle*
- x et y sur le paddle
- init vx et vy

**draw()**
*Dessine la balle*
- fonctions du 2DContext

**revert(string axe)**
*Inverse la vitesse vx ou vy*
- axe = -axe

**move()**
*Deplace la place en fonction des vitesse vx et vy, et gere les collisions avec les murs, le paddle et les bricks*
- inverse les vitesses si la balle touche un bord ou le paddle
- App stop si la balle touche le sol
- deplace x et y en y ajoutant les vitesses


### Brick
- width
- height
- color
- path
- x, y

**init()**
- init x, y, path
- defini le path

**draw()**
- fonctions de Context2D

**detectColision()**
*Appelée par Lvl. Detecte les collisions avec la balle et renvoi un booleen*
- definition des points cardinaux de la balle
- On cherche si les points se trouvent dans les paths avec isPointInPath() 
    - SI oui, on inverse la vitesse de la balle et on renvoi true

### Lvl
- bricks

**init(lvl)**
*Instancie un tableau de Bricks à partir d'un tableau de chars et initie leur color et path(en fonciton des chars et des indes du tableau lvl).*
- loop sur lvl
- instance Brick
- brick color, x et y
- brick init()
- push dans Lvl bricks

**draw()**
*Appele la fonction draw de chaque Brick*

**checkExposedBricks()**
*Boucle sur chaque Brick de this.bricks et defini si elle exposée en verifiant si elle à des voisines. Defini this.exposed.*
- definition d'un array vide, exposed
- loop for sur this.bricks
- Si la brique existe
    - Si une des cases voisines contient null, on ajoute la brique a l'array
- on redefini this.exposed avec le nouvel array

**detectAffectedBricks()**
*Appelle la fonction detectColision de chaque brique exposée, et remplace la brique par null si on reçoit true*
- foreach sur this.exposed
- Si la brique existe
    - Si brick.detectColision()
        - brick = null
- redefini this.bricks

## A Regler
**Collisons avec les briques**
[ ] traverse plusieurs briques d'un coup quand elle touche 2 briques en même temp
    V - fonction revert pour la vitesse
    X - Definir un timeout avant que la vitesse de la balle ne puisse être inversée
        -NON: la brique traverse encore plus vu qu'elle ne colisionne plus

**Collision avec le pad**
[ ]  La balle glisse sur le pad 
    - utiliser un Path2D et isPointIsPath()

[ ] Pas de collision par le dessous
    - utiliser un Path2D et isPointIsPath()

**Better Collisions**
[ ] Collisions par les cotés
[ ] Trigo pour angles de la balle