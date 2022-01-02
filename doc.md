# BRICK OUT     *need update with drops*
- Scripts
- Canvas
- Classes
    - App
    - Paddle
    - Ball
    - Brick
    - Lvl

## Development
**systeme de points**
- enlever l'exp de la balle
- garder trace des bricks et des drops ramassés
- les drops donnent 1p

### Next features
[ ] Survival mode
[ ] Completion time of the levels
[ ] Scores
[ ] Bonus: triple ball
[ ] Bonus: gun shot

### Need to be fixed
[ ] Add the interface
[ ] sometimes the ball gets stuck in the wall and only moves vertically

### Need to be optimized
[ ] Collisions angles of the ball
[ ] Redraw only the pad (event mousemouve of canvas)

### To test
[ ] Ball accéleration when hit an object and decrease with timeout

***
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

**lvls**
    - declaration des patterns pour la generation des lvls

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
- state (*start, init, run, pause, stop)*

**startApp()**
*Fait apparaitre le bouton "PLAY GAME"*

**playNormalGame()**
*Jeu normal ?*  
*Le joueur dispose de 3 vies pour terminer tout les niveaux*
- app lifes = 3
- app lvlIndex, et points = 0
- update text contents
- App initLvl(lvls[app.lvlIndex])

**winNormalLvl()**
*Charge le lvl suivant*  
- app lvlIndex ++
- win partie si dernier lvl (a impl)

**initLvl(int lvlNum)**  
*Charge un lvl et Initialise une balle*
- lvl initBricks(lvlNum)  
- App initBall()

**initBall()**  
*Initialise une balle*

**clear()**
- fill canvas

**draw()**
- App clear()
- paddle, ball draw()

**initLvl(array lvl)**
- app state = init
- Lvl.initBricks(array lvl)
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

**getExposedBricks()**
*Boucle sur chaque Brick de this.bricks et defini si elle exposée en verifiant si elle à des voisines.*
- definition d'un array vide, exposed
- loop for sur this.bricks
- Si la brique existe
    - Si une des cases voisines contient null, on ajoute la brique a l'array
- retourne exposed

**defineAffectedBricks()**
*Appelle la fonction detectColision de chaque brique exposée, et remplace la brique par null si on reçoit true*
- foreach sur this.exposed
- Si la brique existe
    - Si brick.detectColision()
        - brick = null
- redefini this.bricks