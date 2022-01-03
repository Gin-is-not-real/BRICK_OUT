//////////////////////////////////////////////
//DEV
let _dev = document.querySelector('#dev');
let _devSwitch = document.querySelector('#switch-dev');
let _restart = document.querySelector('#restart');
let _changeLvl = document.querySelector('#change-lvl');
let _playerXp = document.querySelector('#player-xp');

let devIsActive = false;
////////////////////////////////////////////
// DEV FUNCTIONS
_devSwitch.addEventListener('click', function() {
    if(devIsActive) {
        devIsActive = false;
        this.textContent = 'active dev'
    }
    else {
        devIsActive = true;
        this.textContent = 'stop dev';
    }
})
_restart.addEventListener('click', function() {
    App.pause();
    App.initLvl(lvls[app.lvlIndex]);
})
_changeLvl.count = 0;
_changeLvl.addEventListener('click', function() {
    this.count = (this.count + 1) < lvls.length ? this.count +1 : 0;
    App.initLvl(lvls[this.count]);
})

document.querySelector('#speed-up').addEventListener('click', function() {
    ball.speedUp();
})

document.addEventListener('keydown', function(e) {
    if(e.key === "a") {
        console.log(_dev.classList);
        _dev.classList.toggle("hidden");
    }
})