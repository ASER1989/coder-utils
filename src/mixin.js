/*
* 《混入》
* 覆盖已有属性值或加入新属性
*
* 设计初衷：
* 使Vue等mvvm框架具备react一样的赋值方式（这种感觉有点不正确）
* 在vue中同时修改多个data属性时略显麻烦
* 如：
*   this.state=true
*   this.list.isPageEnd=false
*   this.list.count=100
*   this.form.querykey=null
* 调整为
* main.js:
* this.prototype.setData=function(data){
*   mixin(this.$data,data)
*   }
*
* xxx.vue:
*
* this.setData({
*   state:true,
*   list:{isPageEnd:false,count:100},
*   form:{querykey:null,isLoading:true}
*   }
*
* */
export const mixin = function (raw, data) {
    for (var key in data) {
        if (Object.prototype.toString.call(raw[key]) != "[object Object]") {
            raw[key] = data[key];
        }
        else {
            mixin(raw[key], data[key]);
        }
    }
}