//**
//**event的用途：可以使用在程序或者框架的事件的提醒，当执行什么动作，触发响应的警告或者回调信息；
//**
var event=require("events");
var ee=new event.EventEmitter();

//定义回调方法
ee.on("callback1",function(arg1,arg2)
{
    console.log(arg1+","+arg2);
});

//执行之后被移除
ee.once("callback2",function(arg1,arg2)
{
    console.log(arg1+","+arg2);
});

var listener=function(arg1,arg2)
{
    console.log(arg1+","+arg2);
};
var listener2=function(arg1,arg2)
{
    console.log("listener2:"+arg1+","+arg2);
};
ee.on("callback3",listener);
ee.on("callback3",listener2)

var flag=ee.emit("callback1",1,2);
console.log(flag);
flag=ee.emit("callback2cls",3,4);
console.log(flag);

//只能执行一次
flag=ee.emit("callback2",5,6);
console.log(flag);
flag=ee.emit("callback2",7,8);
console.log(flag);

ee.removeListener("callback3",listener);
//一个事件可以有多个监听
ee.removeAllListeners("callback3");
flag=ee.emit("callback3",9,10);
console.log(flag);






