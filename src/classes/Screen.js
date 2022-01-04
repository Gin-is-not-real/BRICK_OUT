class Screen {
    
    static hideAll() {
        _screen.classList.add('hidden');
        _message.classList.add('hidden');

        screenButtons.forEach(btn => {
            btn.classList.add('hidden');
        });
    }

    static displayStartScreen() {
        _screen.classList.remove('hidden');
        _play.classList.remove('hidden');
    }

    static displayWinNormalLvl() {
        _screen.classList.remove('hidden');

        _message.textContent = app.points + ' points earned ! ';
        _message.classList.remove('hidden');

        _next.classList.remove('hidden');
    }

    static displayWinNormalGame() {
        _screen.classList.remove('hidden');

        _message.textContent = 'You Win with ' + app.points +  ' total points !';
        _message.classList.remove('hidden');

        _restart.classList.remove('hidden');
    }
}

