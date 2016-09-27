
/*
 * GET users listing.
 */
var db = require("../commonjs/database");
var sql=require('./sql/mysql');
exports.validate = function(req,res){
    var username = req.body.username;
    var con = db.getCon();

    con.query("select * from t_user where u_name=?",[username],function(e,r,f){
//        console.log(r);
        if(r.length > 0){
            res.json({"msg":"成功"});
        }else{
            res.json({"msg":"失败"});
        }
    });

    con.end();
}
exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.test=function(req,res){
    sql.selection("select * from t_user where u_name=?",function(data){
        res.json('ok')
    })
}
exports.seachfuns=function(req,res){
    var a=req.body.b
//     console.log(typeof a)
    sql.selection("select * from t_productsinfo  limit ? ,?",[a,16],function(data){
//        console.log(data)
        res.json(data)
    })
}
exports.butfun=function(req,res){
    sql.selection("select count(*) as count from t_productsinfo",function(data){
//        console.log(data)
        res.json(data[0].count)

    })
}
exports.pagefun=function(req,res){
    var page=req.body.thispage
//    console.log(page)
    sql.selection("select * from  t_productsinfo limit ?,?",[page,16],function(data){
        res.json(data)
    })
}
 exports.pageupfun=function(req,res){
     var b=req.body.pageups
     sql.selection("select * from  t_productsinfo limit ?,?",[b,16],function(data){
         res.json(data)
     })
 }
exports.phonefun=function(req,res){
    var b=req.body.phone
    sql.selection("select * from  t_productsinfo limit ?,?",[b,8],function(data){
//        console.log(data)
        res.json(data)
    })
}
exports.phonedownfun=function(req,res){
    var b=req.body.q
//    console.log(b)
    sql.selection("select * from  t_productsinfo limit ?,?",[b,8],function(data){
//        console.log(data)
        res.json(data)
    })
}
exports.phonepageupfun=function(req,res){
    var b=req.body.q
    sql.selection("select * from  t_productsinfo limit ?,?",[b,8],function(data){

        res.json(data)
    })
}
exports.seekfun=function(req,res){
    var b=req.body.name
    sql.selection("select * from t_productsinfo where p_name like ? ",["%"+b+"%"],function(data){
//        console.log(data)
        res.json(data)
    })
}
exports.seekpagefun=function(req,res){
    var b=req.body.name
    sql.selection("select count(*) as count from t_productsinfo where p_name like ? ",["%"+b+"%"],function(data){
         res.json(data[0].count)
    })
}
exports.seekpagesfun=function(req,res){
    var b=req.body.mypage
    var q=req.body.name
    sql.selection("select * from  t_productsinfo  where p_name like ? limit ?,?",["%"+q+"%",b,16],function(data){
        res.json(data)
    })
}
exports.seekone=function(req,res){
    var c=req.body.pageone
    var q=req.body.name
    sql.selection("select * from  t_productsinfo  where p_name like ? limit ?,?",["%"+q+"%",c,16],function(data){
        res.json(data)
    })
}

