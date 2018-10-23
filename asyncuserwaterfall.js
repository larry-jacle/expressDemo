var async=require("async");

console.time("time begins");
//多个任务之间有数据传递，依次执行
var task1=function(callback){
    console.log("task1");

    //callback表示的是调用后面的任务的方法
    callback(null,1);
};

var task2=function(q,callback){
    console.log("task2");
    console.log("传入的数值:"+q);
    callback(null,2);
};


var task3=function(q,callback){
    console.log("task3");
    console.log("传入的数值:"+q);
    callback(null,3);
};

async.waterfall([task1,task2,task3],function (err, result) {
    console.timeEnd("time begins");
    console.log("series");

    if(err)
    {
        console.log(err);
    }else
    {
        //result就是最后一个传入的数值
        console.log(result);
    }
})

