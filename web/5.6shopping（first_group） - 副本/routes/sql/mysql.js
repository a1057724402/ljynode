/**
 * Created by Administrator on 15-3-11.
 */
/**
 * Created by Administrator on 15-3-9.
 */
var db = require("../../commonjs/database");
//var sql=require('mysql');
//function startLink(){
//    var conn=sql.createConnection({
//        host:'localhost',
//        port:3306,
//        database:'shoppinginfo',
//        user:'root',
//        password:'admin'
//    });
//    conn.connect(function(e){
//        if(e) console.log(e)
//    });
//    return conn;
//}

//exports.getConn=function(){
//    var conn=sql.createConnection({
//        host:'localhost',
//        port:3306,
//        database:'shoppinginfo',
//        user:'root',
//        password:'admin'
//    });
//    conn.connect(function(e){
//        if(e) console.log(e)
//    });
//    return conn;
//};

exports.selection=function(str,n,fun){
//    var link=startLink()
    var link=db.getCon()
        ,agr=[];
    if(!fun) fun=n;
    else agr=n;
    link.query(str,agr,function(err,data){
        if(err) console.log(err);
        else{
            if(typeof fun=="function"){
                fun(data);
            }else {
                fun.json(data);
            }
        }
    });
    link.end();
};

//exports.close=function(e){
//    e.end();
//};

