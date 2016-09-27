/**
 * Created by Administrator on 15-4-29.
 */
var sql=require('./sql/mysql.js');

exports.getTable=function(req,res){
//    console.log(req.session.userId+'!!!')
    var json={};
        sql.selection('select p_id id,p_name name,p_shortInfo text,p_price price,p_listImg imgSrc from t_productsinfo where p_id in(select p_id_fk from t_shoppingcart where u_id_fk=?)',[parseInt(req.session.userId)],function(data){
//            console.log(data);
            if(data.length>0) {
                json.data = data;
            }
            res.json(json)
        })
};

exports.deleteItem=function(req,res){
    sql.selection('delete from t_shoppingcart where p_id_fk=? and u_id_fk=?',[req.body.id,req.session.userId],res);
};

exports.submit=function(req,res){
    var data=req.body.data;
    for(var i= 0,len=data.length;i<len;i++){
        sql.selection('update t_shoppingcart set s_num=?,s_ifselect=? where p_id_fk=? and u_id_fk=?',[parseInt(data[i].num),parseInt(data[i].select),parseInt(data[i].id),req.session.userId],function(data){

        })
    }
    res.send("payment.html");
};



