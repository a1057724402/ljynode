
/*
 * GET users listing.
 */
//var db = require("../commonjs/database");
var mysql=require("./sql/mysql")


exports.login=function(req,res){
    var userName=req.body.userName;
    mysql.selection("select * from t_userinfo where u_name=? && u_password=?",[userName,req.body.pwd],function(d){
        if(d.length!=0){
            req.session.userName=userName;
            req.session.userId=d[0].u_id;
            res.send("1")
        }else{
            res.send("0")
        }
    })
}

exports.checkName=function(req,res){
    mysql.selection("select * from t_userinfo where u_name=?",[req.body.userName],function(d){
        if(d.length!=0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
}
exports.checkMail=function(req,res){
    mysql.selection("select * from t_userinfo where u_email=?",[req.body.email],function(d){
        if(d.length!=0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
}
exports.register=function(req,res){
    var userName=req.body.userName;
    var pwd=req.body.pwd;
    var email=req.body.email;
    mysql.selection("insert into t_userinfo(u_name,u_password,u_email) values(?,?,?)",[userName,pwd,email],function(d,err){
        if(d.affectedRows!=0){

            res.send("1")
        }else{
            res.send("0")
        }
    })
}
exports.getUserInfo=function(req,res){
    mysql.selection("select * from t_userinfo where u_name=?",[req.body.userName],function(d){
        if(d.length!=0){
            res.json(d)
        }else{
            res.send("0")
        }
    })
}
exports.modifyUserInfo=function(req,res){
    mysql.selection("update t_userinfo set u_phone=?,u_email=? where u_name=?",[req.body.phone,req.body.email,req.session.userName],function(d){
        if(d.length!=0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
}
exports.getCartNum=function(req,res){
    mysql.selection("select count(*) as pNum from t_shoppingcart where u_id_fk=(select u_id from t_userinfo where u_name=?)",
        [req.body.userName],function(d){
        res.send(d)
    })
}
exports.getRelativePro=function(req,res){
    mysql.selection("select p_name,p_price,p_listImg from t_productsinfo limit 0,6",
        function(d){
            res.send(d)
        })
}

exports.getAddrs=function(req,res){
    mysql.selection("select u_addr as addrs from t_userinfo where u_id=?",
        [req.session.userId],function(d){
            res.json({"addr": d[0].addrs})
        })
}

exports.delAddr=function(req,res){
    mysql.selection("select u_addr from t_userinfo where u_id=?",
        [req.session.userId],function(d){
            var temp=d[0].u_addr.split(";")
            temp.splice(req.body.index,1)
            var tempAddr=temp.join(";")
            mysql.selection("update t_userinfo set u_addr=? where u_id=?",
                [tempAddr,req.session.userId],function(d){
                    if(d.affectedRows!=0){
                        res.send("1");
                    }
                })
        })
}
exports.setDefaultAddr=function(req,res){
    mysql.selection("select u_addr from t_userinfo where u_id=?",
        [req.session.userId],function(d){
            var temp=d[0].u_addr.split(";")
            var index=parseInt(req.body.index)

            for(var i=0;i<temp.length;i++){
                if(temp[i].split(",").length>3){
                    var t=temp[i].split(",");
                    t.length--;
                    temp[i]= t.join(",");
                    break;
                }
            }
            var te=temp[index].split(",");
            te.push("默认地址")
//
            temp[index]=te.join(",");
            var addr=temp.join(";");

            mysql.selection("update t_userinfo set u_addr=? where u_id=?",
                [addr,req.session.userId],function(data){
                    if(data.affectedRows!=0){
                        res.send("1");
                    }
                })
        })
}


exports.getProvince=function(req,res){
    mysql.selection("select province from t_province",
       function(d){
            res.json(d)
        })
}


exports.getCity=function(req,res){
    mysql.selection("select city from t_city where city_prov=(select id from t_province where province =?)",
        [req.body.currentProv],function(d){
            res.json(d)
        })
}

exports.addAddr=function(req,res){
    var crtId=req.session.userId;
    mysql.selection("select u_addr from t_userinfo where u_id=?",
        [crtId],function(data){
            mysql.selection("update t_userinfo set u_addr=? where u_id=?",
                [data[0].u_addr+req.body.addr,crtId],function(d){
                    if(d.affectedRows!=0){
                        res.send("1")
                    }
                })
        })
}


exports.getOrderInfo=function(req,res){
    var crtId=req.session.userId;
    mysql.selection("select distinct o_number,o_address,o_receiver,o_tel from t_orderlist where u_id_fk=?",
        [crtId],function(data){
            res.json(data)
        })
}

exports.getOrderNowInfo=function(req,res){
//    var crtId=req.session.userId;
    mysql.selection("select * from t_productsinfo where p_id in(select distinct p_id from t_orderlist where o_number=?)",
        [req.body.orderNum],function(data){

            res.json(data)
        })
}












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

