# Classes

## App
### Properties
**state**
    - start
    - init
    - run
    - pause
    - stop
**lvlIndex**  
**points**  
**lifes**  
**gunshots**  
**stats**  

### Canvas methods

#### **clearCanvas()**
#### **draw()**

    App clearCanvas()
    call paddle, ball and lvl draw(), and paddle drawShoot()

### Frame methods

#### **run()**

    set state to `run`
if frame is undefined 

    request new frame with App.run in callback
and next

    call lvl checkForAffectedBricks() and moveDrops()
    call ball move() and paddle moveShoot()
    App draw()

#### **pause()**

    set state to `pause`
    cancel animation frame

#### **stop()**

    set state to `stop`
    cancel animation frame and set frame to undefined
    App clearCanvas()


### Game methods

#### **startApp()**

    set state to `start`
    display screen, message and play button


#### **initLvl(pattern)**

    set state to `init`
    call lvl initBricks(pattern)
    App initBall()
    update lvl text content

#### **initBall()**

    set frame to 0    *needed for animation*
    set state to `init`   *(ball-init ?)*
    call paddle init()    
    call ball init()

#### **initNormalGame()**

    init properties
    init hub text contents
    init lvl

#### **looseBall()**

    lifes -
    update life text content

if lifes 0

    looseGame
        
else

    lvl drops clear []
    App pause()
    App initBall()

#### **winNormalLvl()**

    setLvlIndex(lvlIndex +1)
    
if lvls as next
    
        update message text content
        display screen and next button  
        
        
else 

        winNormalGame()
        display restart button

#### **winNormalGame()**

    App stop()
    update message text content
    display screen and restart button

#### **looseGame()**

    App stop()
    display screen and replay button