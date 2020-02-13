const _timeF = {
    h: num => Math.floor(num / 1000 / 60 / 60 % 24),
    m: num => Math.floor(num / 1000 / 60 % 60),
    s: num => Math.floor(num / 1000 % 60),
    hh: num => {
        let r = _timeF.h(num);
        r = r.toString()[1] ? r : "0" + r;
        return r;
    },
    mm: num => {
        let r = _timeF.m(num);
        r = r.toString()[1] ? r : "0" + r;
        return r;
    },
    ss: num => {
        let r = _timeF.s(num);
        r = r.toString()[1] ? r : "0" + r;
        return r;
    }
}


class Convert {
    static numToTime(num, f) {
        let fn = _timeF[f];
        if (!fn) {
            return [_timeF.hh(num), _timeF.mm(num), _timeF.ss(num)].join(":");
        }
        return fn(num);
    }

    static toDate(num) {
        let time = new Date(num);
        let year = time.getFullYear();
        let month = time.getMonth();
        let day = time.getDate();
        month += 1;
        month = month.toString()[1] == null ? '0' + month : month;
        day = day.toString()[1] == null ? '0' + day : day;

        return [year, month, day]
    }

    static toTime(num) {
        let _time = new Date(num);
        let hour = _time.getHours();
        let min = _time.getMinutes();
        let seconds = _time.getSeconds();

        hour = hour.toString()[1] == null ? '0' + hour : hour;
        min = min.toString()[1] == null ? '0' + min : min;
        seconds = seconds.toString()[1] == null ? '0' + seconds : seconds;
        return [hour, min, seconds];
    }

    static toDateTime(num,split='/') {
        return [this.toDate(num).join(split), this.toTime(num).join(":")].join(" ");
    }
}

export default Convert;
