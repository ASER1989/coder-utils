const _TimerType = {
    keys: ["TIMERCOUNTDOWN"],
    countDown: "TIMERCOUNTDOWN",
    validate(key) {
        return _TimerType.keys.includes(key);
    }
}

class _countDown {
    constructor(endCount,debug=false) {
        this.endCount = endCount;
        this.startTime = +new Date();
        this.debug =debug;
    }

    get type() {
        return _TimerType.countDown;
    }

    isEnd(count) {
        return count <= 0;
    }

    calc(model) {
        model.debug && console.log("TIMER EVENT ISRUNNING==================TRUE")
        let now = +new Date();
        let offset = now - model.startTime;
        let count = model.endCount - offset;
        count = count < 0 ? 0 : count;
        return count;
    }
}


class _Timer {
    constructor(dataModel) {
        this.state = _TimerType.validate(dataModel.type) ? dataModel : null;
        this._timer = null;
        this.tick = 1000;

        !_TimerType.validate(dataModel.type) && console.error("Timer model is invalidate!")
    }

    setTick(t) {
        if (Object.prototype.toString.call(t) == "[object Number]") {
            this.tick = t;
        }
    }

    stop() {
        this._timer && clearTimeout(this._timer);
    }

    start(fn) {
        if (!this.state) {
            return;
        }
        let calcFn = this.state.calc;
        let _this = this;

        function count() {
            let result = calcFn(_this.state);
            typeof fn == "function" && fn(result);

            _this.stop();
            _this._timer = _this.state.isEnd(result) ? null : setTimeout(count, _this.tick);
        }

        if (!_this.state.isEnd(_this.state.endCount)) {
            typeof calcFn == "function" && count();
        }
    }
}

class _singleTimer {
    constructor() {
        this.timer = null;
    }

    static setModel(model) {
        this.timer && this.timer.stop();
        this.timer = new _Timer(model);
        return this;
    }

    static getTimer() {
        return this.timer;
    }
}

export const Timer = _Timer;
export const SingleTimer = _singleTimer;
export const CountDown = _countDown;
export default {
    CountDown: _countDown
}
