class Timer {
    minutes;
    seconds;
    count;
    timerIntervalId;

    constructor() {
        this.minutes = 0;
        this.seconds = 0;
        this.count = 0;
        this.timerIntervalId = undefined;
    }

    start() {
        let self = this;

        if(this.timerIntervalId === undefined) {

            this.timerIntervalId = window.setInterval(function() {
                self.increment(1);

                let str = self.minutes > 0 ? self.minutes + ":" : "";
                str += self.seconds;

                _time.textContent = str;
            }, 1000);
        }
    }

    stop() {
        window.clearInterval(this.timerIntervalId);
        this.timerIntervalId = undefined;
    }

    restart() {
        this.minutes = 0;
        this.seconds = 0;
        this.count = 0;
    }

    increment(value) {
        this.count += value;
        this.seconds ++;
        this.count = 0;

        if(this.seconds >= 60) {
            this.minutes ++;
            this.seconds = 0;
        }
    }

    getSeconds() {
        return Math.floor(this.count / 100);
    }
    getMinutes() {
        return Math.floor(this.count / 6000);
    }
}