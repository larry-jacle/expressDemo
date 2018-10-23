var async=require("async");
var mysql=require("mysql");

//通过连接池来访问mysql
var connPool=mysql.createPool({
    user:"root",
    password:"root",
    host:"127.0.0.1",
    port:'3306'
});

var  userAddSql = 'INSERT INTO userinfo(UserName,UserPass) VALUES(?,?)';
connPool.getConnection(function(err,connection){
    //通过async来组织一连串任务
    connection.query("use nodesample");
    connection.beginTransaction(function(err)
    {
        if(err)
        {
            console.log(err);
            return;
        }else
        {
          var task1= function task1(callback)
          {
              var  userAddSql_Params = ['Wilson', 'abcd'];
              connection.query(userAddSql,userAddSql_Params,function(err,result)
              {
                    if(err)
                    {
                        //不进行后续的任务执行
                        console.log(err);
                        callback(err,null);
                    }else
                    {
                        console.log("task1 insert succeed!");
                        callback(null,result);
                    }
              });
          }

            var task2= function task1(callback)
            {
                var  userAddSql_Params = ['Wilson2', 'abcd2'];
                connection.query(userAddSql,userAddSql_Params,function(err,result)
                {
                    if(err)
                    {
                        //不进行后续的任务执行
                        console.log(err);
                        callback(err,null);
                    }else
                    {
                        console.log("task2 insert succeed!");
                        callback(null,result);
                    }
                });
            }

            var task3= function task1(callback)
            {
                var  userAddSql_Params = ['Wilson3', 'abcd3'];
                connection.query(userAddSql,userAddSql_Params,function(err,result)
                {
                    if(err)
                    {
                        //不进行后续的任务执行
                        console.log(err);
                        callback(err,null);
                    }else
                    {
                        console.log("task3 insert succeed!");
                        callback(null,result);
                    }
                });
            }

            //通过async来组织任务，手动控制回滚
            async.series([task1,task2,task3],function(err,result)
            {
                 if(err)
                 {
                     //回滚
                     console.log(err);
                     connection.rollback(function()
                     {
                         console.log("事务回滚!");
                         connPool.releaseConnection(connection);
                     })
                     return ;
                 }else
                 {
                     //提交事务
                     connection.commit(function(err)
                     {
                         if(err)
                         {
                             console.log(err);
                         }

                         console.log("事务提交成功!");
                         connPool.releaseConnection(connection);
                         connPool.end()
                     });
                 }
            });

        }
    })


})
