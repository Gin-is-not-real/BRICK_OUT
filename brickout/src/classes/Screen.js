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

    static displayWinNormalLvl() {
        Screen.hideButtons();
        
        _screen.classList.remove('hidden');

        _message.textContent = app.points + ' points earned ! ';
        _message.classList.remove('hidden');

        _next.classList.remove('hidden');
    }

    static displayWinNormalGame() {
        Screen.hideButtons();

        _screen.classList.remove('hidden');

        _message.textContent = 'You Win with ' + app.points +  ' total points !';
        _message.classList.remove('hidden');

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

