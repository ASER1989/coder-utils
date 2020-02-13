/*
* @introduction:
* 管理维护订阅队列及发布订阅消息
* */
class StationModel {
    constructor(param) {
        this.name = param.name;
        this.callback = typeof param.callback == "function" ? param.callback : () => {
        };
    }
}

class Station {
    constructor() {
        this.Subscribes = [];
    }

    static getStation() {
        if (!this.Subscribes) {
            this.Subscribes = new Station().Subscribes;
        }
        return this.Subscribes;
    }

    static add(name, fn) {
        this.Subscribes = this.Subscribes || new Station().Subscribes;
        this.remove(name);

        this.Subscribes.push(new StationModel({
            name: name,
            callback: fn
        }));
    }

    static remove(name) {
        let idx = this.Subscribes.findIndex(item => item.name == name);
        idx && this.Subscribes.splice(idx, 1);
    }

    static find(name) {
        if (!this.Subscribes) {
            return null
        }
        return this.Subscribes.find(item => item.name == name);
    }
    static dispatch(name,param){
        let item = this.find(name);
        item && item.callback(param)
    }
}

export default Station;


