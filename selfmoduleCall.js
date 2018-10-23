var m=require("./selfmodule");

//自定义模块的调用
m.init(10);
m.countDown();

m.prt();
m.prt();
m.prt();
m.prt();

//第二次调用的时候，只会加载一次，使用之前的加载
var m=require("./selfmodule");
console.log("第二次调用...");
m.countDown();
m.prt();

m.testval="test123";
global.globalVal='全局对象修改!';
console.log(m.testval);
console.log(global.globalVal);

