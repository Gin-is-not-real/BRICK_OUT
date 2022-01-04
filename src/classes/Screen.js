class Screen {
    
    static hideButtons() {
        screenButtons.forEach(btn => {
            btn.classList.add('hidden');
        });
    }

    static hideAll() {
        Screen.hideButtons();

        _screen.classList.add('hidden');
        _message.classList.add('hidden');
    }

    static displayStartScreen() {
        Screen.hideButtons();

        _screen.classList.remove('hidden');
        _play.classList.remove('hidden');
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
}

