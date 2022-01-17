/**
 * Contains method for display elements of menu screen according to app state or event
 * @method hideButtons()            hide all buttons
 * @method hideAll()                hide screen, and all its elements
 * @method displayChooseLvlMenu()   display the normal mode menu for choose lvl
 * @method displayStartScreen()     display the app start menu for choose a game mode
 * @method displayPauseScreen()     display pause menu
 * @method hidePauseScreen()        hide pause menu
 * @method displayWinNormalGame()   display screen for record score in normal mode
 * @method displayScoresList()      display score list and restart button
 * 
 */
class Screen {
    
    static hideButtons() {
        screenButtons.forEach(btn => {
            btn.classList.add('hidden');
        });
    }

    static hideAll() {
        Screen.hideButtons();
        _lvlsList.classList.add('hidden');

        _screen.classList.add('hidden');
        _message.classList.add('hidden');
        _ul.classList.add('hidden');
        _formContainer.classList.add('hidden');
    }

    static displayChooseLvlMenu() {
        Screen.hideButtons();
        _lvlsList.innerHTML = '';

        if(_lvlsList.innerHTML === '') {
            lvls.forEach(lvl => {
                let li = document.createElement('li');
                li.textContent = 'Lvl ' + parseInt(lvls.indexOf(lvl) +1);
    
                li.addEventListener('click', function() {
                    Screen.hideAll();
                    App.initNormalGame(lvls.indexOf(lvl));
                })
                _lvlsList.appendChild(li);
            })
        }

        _screen.classList.remove('hidden');
        _lvlsList.classList.remove('hidden');
    }

    static displayStartScreen() {
        Screen.hideButtons();
        _title.textContent = "Play game";

        _screen.classList.remove('hidden');
        _playNormal.classList.remove('hidden');
    }

    static displayPauseScreen() {
        _pauseScreen.classList.remove('hidden');
    }
    static hidePauseScreen() {
        _pauseScreen.classList.add('hidden');
    }

    // static displayWinNormalLvl() {
    //     Screen.hideButtons();
        
    //     _screen.classList.remove('hidden');

    //     _message.textContent = app.points + ' points earned ! ';
    //     _message.classList.remove('hidden');

    //     _next.classList.remove('hidden');
    // }

    static displayWinNormalGame() {
        Screen.hideButtons();

        _title.textContent = "You win !";
        _message.textContent = 'You finish lvl ' + app.lvlIndex + ' with ' + app.points +  ' total points !';
        
        _screen.classList.remove('hidden');
        _restart.classList.remove('hidden');

        if(server_on) {
            fetchAndDisplayScoresList(app.lvlIndex);
            _ul.classList.remove('hidden');
        }
        else {
            _message.classList.remove('hidden');
        }
    }

    static displayScoresList() {
        _title.textContent = "Scores lvl " + (parseInt(app.lvlIndex)+1);

        _formContainer.classList.add('hidden');
        _restart.classList.remove('hidden');
    }

    static displayLooseLvl() {
        _title.textContent = "You loose :(";
        _screen.classList.remove('hidden');

        if(app.gameMode === 'normal') {
            _replay.classList.remove('hidden');
        }
        
        _restart.classList.remove('hidden');
    }
}

function testRetrieveData() {

}

