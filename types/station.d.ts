export interface IStationModel {
    name:string,
    callback:Function
}
export interface IStation {
    //获取订阅列表
    getStation:()=>Array<IStationModel>

    //添加订阅
    add:(name:string,fn:Function)=>void

    //移除订阅信息
    remove:(name:string)=>void

    //查找订阅
    find:(name:string)=>IStation

    //发布订阅
    dispatch:(name:string,param:any)=>void
}