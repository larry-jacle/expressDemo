var express=require("express");
var router=express.Router();
var crypto=require("crypto");

router.get("/",function (req,res) {
     console.log("访问Login页面");
     //返回的直接是解析了的cookie的数值
     console.log("cookies："+req.signedCookies.isLogin);
     res.clearCookie("isLogin");
     //req.session.destory();

     if(req.cookies.isLogin)
     {
       req.session.isLogin=req.cookies.isLogin;
     }
    //如果是已经签名的cookie
    if(req.signedCookies.isLogin)
    {
        req.session.isLogin=req.signedCookies.isLogin;
    }

     if(req.session.isLogin)
     {
         res.locals.isLogin=req.session.isLogin;
     }else{
         res.locals.isLogin="";
     }
     //获取当前的登录信息
     console.log("当前是否登录："+res.locals.isLogin);

     var uname1=req.query.txtUserName;
     var passwd1=req.query.txtUserPwd;
     var uname2=req.param("txtUserName");
     var passwd2=req.param("txtUserPwd");

    console.log('req.query用户名:'+uname1);
    console.log('req.query密码:'+passwd1);
    console.log('req.param用户名:'+uname2);
    console.log('req.param密码:'+passwd2);


    res.render("login",{title:"login"})
});


router.post("/",function (req,res) {
    req.session.isLogin="sucess";
    res.locals.isLogin=req.session.isLogin;

    //设置cookie的key-value数值
    res.cookie("isLogin","success",{maxAge:600000,signed:true});
    //console.log("cookies.isLogin:"+req.cookies.isLogin);
    console.log("设置了session的登录状态："+req.session.isLogin);

    var uname1=req.body.txtUserName;
    var passwd1=req.body.txtUserPwd;
    var uname2=req.param("txtUserName");
    var passwd2=req.param("txtUserPwd");

    //对数据进行加密
    //md5算法
    var md5=crypto.createHash("md5");
    var secretPwd=md5.update(passwd2).digest("hex");
    console.log(secretPwd);

    console.log('req.query用户名:'+uname1);
    console.log('req.query密码:'+passwd1);
    console.log('req.param用户名:'+uname2);
    console.log('req.param密码:'+passwd2);


    res.render("login",{title:"login"})
});

module.exports=router;
