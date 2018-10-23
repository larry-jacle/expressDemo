var mysql=require("mysql");


//通过连接池来访问mysql
var connPool=mysql.createPool({
    user:"root",
    password:"root",
    host:"127.0.0.1",
    port:'3306',

});

//设置事件监听
connPool.on("connection",function (connection) {
   //connection预处理操作
    console.log("connected");
});

connPool.getConnection(function (err, connection) {
   //connection操作
    connection.query("select * from nodesample.userinfo",function(err,result)
    {
      if(!err)
      {
          console.log(result);
          //连接池释放连接
          connPool.releaseConnection(connection);
      }
    });
});
