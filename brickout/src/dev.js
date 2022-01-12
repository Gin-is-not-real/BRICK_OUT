//////////////////////////////////////////////
//DEV
let _dev = document.querySelector('#dev');
let devIsActive = false;

////////////////////////////////////////////
// DEV FUNCTIONS

// display dev  
document.addEventListener('keydown', function(e) {
    if(e.key === "a") {
        console.log(_dev.classList);
        _dev.classList.toggle("hidden");
    }
})

// dev mode turn on/off
document.querySelector('#switch-dev').addEventListener('click', function() {
    if(devIsActive) {
        devIsActive = false;
        this.textContent = 'active dev';
    }
    else {
        devIsActive = true;
        this.textContent = 'stop dev';
    }
})

// go to menu
document.querySelector('#btn-menu').addEventListener('click', function() {
    App.stop();
    App.startApp();
})

// win lvl
document.querySelector('#btn-win-lvl').addEventListener('click', function() {
    App.winNormalLvl();
})

// next lvl
document.querySelector('#change-lvl').addEventListener('click', function() {
    App.stop();
    App.setLvlIndex(app.lvlIndex +1);
    App.initLvl(lvls[app.lvlIndex]);
})

// speed up
document.querySelector('#speed-up').addEventListener('click', function() {
    ball.speedUp();
})

