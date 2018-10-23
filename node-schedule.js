var schedule = require('node-schedule');

function scheduleCronstyle(){
    schedule.scheduleJob('*/3 * * * * *', function(){
        console.log('scheduleCronstyle:' + new Date());
    });
}

scheduleCronstyle();
