var node_schedule=require("node-schedule");


//node-schedule的递归调用
function node_schedule_func()
{
    var rule=new node_schedule.RecurrenceRule();
    // rule.dayOfWeek = 2;
    // rule.month = 3;
    // rule.dayOfMonth = 1;
    // rule.hour = 1;
    // rule.minute = 42;
    rule.second = 20;

    //通过rule来指定定时执行的规则
    var job=node_schedule.scheduleJob(rule,function()
    {
        console.log('RecurrenceRule:' + new Date());
    });

    //取消定时任务
    setTimeout(function()
    {
        job.cancel();
    },5000);

}

node_schedule_func();
