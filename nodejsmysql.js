var mysql=require("mysql");
var conn=mysql.createConnection({
    user:"root",
    password:"root",
    host:"127.0.0.1",
    port:'3306'
});

//建立数据库连接
conn.connect(function(err){
    if(err)
    {
        console.log(err);
    }else
    {
        console.log("connection succeed!");
    }
})

conn.query("use nodesample");
var  userAddSql = 'INSERT INTO userinfo(UserName,UserPass) VALUES(?,?)';
var  userAddSql_Params = ['Wilson', 'abcd'];
conn.query(userAddSql,userAddSql_Params,function (err, result) {
    if(err)
    {
        console.log(err);
        return;
    }else
    {
        console.log(result);
    }
});

//查询所有的表记录
conn.query("select * from userinfo",function (err, result) {
    if(err)
    {
        console.log(err);
        return;
    }else
    {
        console.log(result[0]);
    }
});

conn.end(function(err){
    if(err)
    {
        console.log(err);
    }
    console.log("connection end!");
});


