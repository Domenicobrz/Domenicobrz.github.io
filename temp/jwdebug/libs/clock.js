class Clock {
    constructor(start, interval) {
        this._start = 0;
        this._interval = interval;
        this._current = this._start;
    }


    elapsed(now) {
        if (now - this._current > this._interval) {
            
            this._current = now;
            return true;
        }

        return false;
    }
}