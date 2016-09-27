
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

//index
var index=require("./routes/index.js")
var goodsList=require("./routes/goodsList")
var shoppingCart=require('./routes/shoppingCart');
var goodsinfo=require('./routes/goodsinfo');
var payment=require('./routes/payment');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.cookieParser('your secret here create'));    // 使用cookie
app.use(express.session());    // 使用session
//app.use(express.cookieParser())
//app.use(express.session({secret:'test'}))

app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/users', user.list);
//app.get('/validate',user.validate);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
/*刘文*/

//最新商品
app.post("/lastProducts",index.lastProducts)
//最热门商品
app.post("/hotsProducts",index.hotsProducts)
//页面个人中心的进入
app.post("/personalCenter",index.personalCenter)



/*刘文*/

/*熊鑫鑫*/
//注销session
app.post("/outSession",function(req,res){
//    req.session.username=null
//    console.log(req.session.username)
    req.session.destroy(function(err){
        res.json({mag:"请登录!"})
    })
})

app.get("/getSession",function(req,res){
    var userName=req.session.userName;
    if(userName != undefined){
        res.json({user:userName})
//        res.send(userName)
//        console.log(userName)
    }else{
        res.json({})
    }
})

//    login
app.get("/index.html",function(req,res){
    res.sendfile("public/index.html")
})
app.post("/login",function(req,res){
    user.login(req,res)
})

//      register 注册
app.post("/checkName",function(req,res){
    user.checkName(req,res)
})

app.post("/checkMail",function(req,res){
    user.checkMail(req,res)
})

app.post("/register",function(req,res){
    user.register(req,res)
})

//用户中心 管理界面 初始加载数据

app.post("/getUserInfo",function(req,res){
    user.getUserInfo(req,res)
})

app.post("/modifyUserInfo",function(req,res){
    user.modifyUserInfo(req,res)
})

app.post("/getCartNum",function(req,res){
    user.getCartNum(req,res)
})

app.post("/getRelativePro",function(req,res){
    user.getRelativePro(req,res)
})

app.post("/getAddrs",function(req,res){
    user.getAddrs(req,res)
})

app.post("/getProvince",function(req,res){
    user.getProvince(req,res)
})

app.post("/getCity",function(req,res){
    user.getCity(req,res)
})

app.post("/addAddr",function(req,res){
    user.addAddr(req,res)
})

app.post("/delAddr",function(req,res){
    user.delAddr(req,res)
})

app.post("/setDefaultAddr",function(req,res){
    user.setDefaultAddr(req,res)
})

//订单信息获取
app.post("/getOrderInfo",function(req,res){
    user.getOrderInfo(req,res)
})

app.post("/getOrderNowInfo",function(req,res){
    user.getOrderNowInfo(req,res)
})

/*熊鑫鑫*/

/*陈程*/
//goodsList
app.get("/goodsListId",goodsList.goodsListId);//获取页面数据
app.post("/getUser",goodsList.getUser);//获取用户信息
app.post("/addCartChack",goodsList.addCartChack);//检测是否已添加购物车
app.post("/discussNum",goodsList.discussNum);//查询评论条数
app.post("/discuss",goodsList.discuss); //读取评论信息
app.post("/discussMessage",goodsList.discussMessage);//添加评论
app.post("/addGoods",goodsList.addGoods);//添加到购物车

/*陈程*/
/*文璨*/
//goodsList
app.get('/shoppingCart/table',shoppingCart.getTable);
app.post('/shoppingCart/deleteItem',shoppingCart.deleteItem);
app.post('/shoppingCart/submit',shoppingCart.submit);

app.get('/payment/table',payment.getTable);
app.post('/payment/order',payment.createorder);

/*文璨*/
/*刘珈荧*/
app.post("/seachaLL",goodsinfo.seachfuns)
app.post("/seachbut",goodsinfo.butfun)
app.post("/pages",goodsinfo.pagefun)
app.post("/pageup",goodsinfo.pageupfun)
app.post("/phoneseach",goodsinfo.phonefun)
app.post("/phonedown",goodsinfo.phonedownfun)
app.post("/phonepageup",goodsinfo.phonepageupfun)
app.post("/seeks", goodsinfo.seekfun)
app.post("/seekpage",goodsinfo.seekpagefun)
app.post("/seekpages",goodsinfo.seekpagesfun)
app.post("/seekone",goodsinfo.seekone)
/*刘珈荧*/