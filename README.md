# BRICK OUT

## Fonctionnement
**main**
- recuperation elements dom dev et du canvas
- init du ctx
- declaration frame (undefined)

- instance App, Paddle, Ball
- App initLvl()
- instance Brick, init x y et draw

- declaration des fonctions du canvas
*déclarée à la fin car on besoin des objets*

*- declaration fonctions dev*

### App
#### state:
Peut valoir:
- init
- run
- pause
- stop

#### Fonctions
**clear()**
- fill canvas

**draw()**
- App clear()
- paddle, ball draw()

**initLvl()**
- app state = init
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

**stop**
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

**detectColisions()**
*Appelle la fonction detectColision de chaque Brick, et la remplace par null si elle renvoi true*
- foreach sur lvl.bricks
- Si la brick est non null
    - Si brick detectColision()
        - brick = null


### Canvas
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

