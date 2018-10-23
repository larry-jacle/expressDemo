var mysql=require("mysql");
var dbname="nodesample";


//数据库的连接信息
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"root"
});

pool.on("connection",function (connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function User(){

}