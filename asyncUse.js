var async=require("async");

//多个任务之间没有数据传递，依次执行
var task1=function(callback){
   console.log("task1");
   callback(null,"task1");
};

var task2=function(callback){
    console.log("task2");
    callback(null,"task2");
};


var task3=function(callback){
    console.log("task3");
    callback("err","task3");
};

async.series([task1,task2,task3],function (err, result) {
    console.log("series");

    if(err)
    {
        console.log(err);
    }else
    {
        console.log(result);
    }
})

