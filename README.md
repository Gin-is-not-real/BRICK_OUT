# BRICK OUT
A brick-breaking game, all in Javascript vanilla.

## Game
Break all bricks on a lvl to finish it. Each brick broked drop an aleatory power-up that give you a bonus or malus when you catch it with paddle.

## Getting Started
Just clone or the repository, open folder and run **index.html**. 

***
## Latest add, fix and optimisation
- Bricks drop aleatories powers up   
- Normal Game  
- Drops give points  
- Gunshots
- class Screen
- App setters for game properties
 
----------------------------------------------
----------------------------------------------
# Fonctionnement (fr)
----------------------------------------------
## App

**App gere:**
- l'animation   (run, stop, pause)
- le dessin     (clearCanvas and draw)
- le jeu        (startApp, initLvl, initBall and initNormalGame, winNormalLvl/Game, looseBall/Game)
----------------------------------------------
### Animation
**L'animation** est relié a la propriété state de App, et est controllé par:
- les events listeners (keys, click, mousemove...)
- les evenements de la partie (la partie se met en pause lorsque on perd une balle)

**La propriété state** permet de controller quelles actions pourront être déclenchés par les events listeners (par exemple l'event mousemouse ne deplace pas le paddle si state est start, ou pause).  
**La valeur de state** est modifié par les méthodes startApp, initLvl/Ball, run, pause et stop. Les 3 dernières controllent aussi l'animation.  

**start:** l'animation ne tourne pas. Les events sur le canvas et la touche de tir sont désactivés.  

**init:** l'animation ne tourne pas. La touche de tir est désactivé. Sur le canvas, mousemove fait bouger le paddle et dessine la balle dessus, et un clic lance la balle.  

**run:** Debloque tout les events et lance l'animation: une serie d'instructions est lancée à intervalles reguliers: 
- la verification des briques touchées et le deplacement des drops par la classe Lvl 
- le deplacement de la balle et du tir de fusil si existe
- le dessin le canvas

**pause:** l'animation est stoppée, mousemove sur le canvas ne déplace plus le pad et le tir est désactivé.    

**stop:** les events sont bloqués, l'animation est stoppée et la variable frame effacée. Le canvas est nettoyé.

----------------------------------------------
### Dessin
**Le dessin** est géré par la methode draw, appelée à chaque frame dans la méthode run. A chaque appel elle efface le canvas, et appelle les méthodes draw des objets paddle, ball et lvl. 

----------------------------------------------
### Jeu
**Les méthodes** controllant le jeu consistent à:
- demander l'affichage des écrans menu et des boutons a la classe Screen
- initier les propriétés lvlIndex, points, lifes, gunshots et stats.
- initier les objets lvl, paddle et ball


**startApp** passe le state à start et affiche le menu principal.  


**initLvl** passe le state à init, appelle initBricks de l'objet lvl, et initBall.  

**initBall** efface la valeur de frame, passe le state à init, et appelle les méthodes init de paddle et ball, et draw de App.  

**initNormalGame** defini les valeurs de départ de **lvlIndex**, **points**, **lifes** et **gunshots** grace aux setters. Apelle initLvl. 


**looseBall** est appelé lorsque la balle touche le sol et retire une vie. Si c'était la dernière, appelle looseGame, sinon met à jour la valeur de lifes dans le hub, vide les drops en cours du lvl, et appelle les méthodes pause et initBall.  


**winNormalLvl** est appelé lorsque toutes les briques sont détruites. Il incrémente lvlIndex. Si il n'y a plus de lvl, apelle winNormalGame. Sinon demande l'affichage l'écran de niveau suivant.  

**winNormalGame** appelle App stop et demande à afficher l'écran de fin de partie.  

**looseGame** stop App et demande à afficher  l'écran rejouer

**setters** pour les propriétés de jeu; lvlIndex, points, gunshots et lifes. Ils change la valeur de la propriété et mettent à jour l'affichage du hub


*completer*