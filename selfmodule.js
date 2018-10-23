//自定义模块
var initVal=0;
global.globalVal='全局对象';

function init(val)
{
    initVal=val;
    console.log(val);
}

function  countDonw()
{
    initVal=initVal-1;
    console.log(initVal);
}


function prt()
{
    console.log(initVal);
}
//暴露模块的方法接口
//NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports
//exports.init=init;
//exports.countDown=countDonw;
//多个导出组织在一起
module.exports={
    init:init,
    countDown:countDonw

}

module.exports.prt=prt;
module.exports.testval="导出的变量:"+initVal;

