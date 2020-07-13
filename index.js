import station from './src/station'
import Convert from './src/until'
import {Timer, SingleTimer, CountDown} from './src/timer'
import {mixin as _mixin} from "./src/mixin";

const StationManager = station;
const TimerModel = {
    CountDown: CountDown
}

export const mixin = _mixin;
export {
    StationManager,
    Convert,
    Timer,       //计时管理，依赖计时模型
    SingleTimer, //单例计时管理
    TimerModel   //计时模型
}
