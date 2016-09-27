/**
 * Created by Administrator on 15-4-30.
 */
var sql=require('./sql/mysql');

exports.getTable=function(req,res){
    sql.selection('select s.s_id,s.p_id_fk p_id,s.s_num num,p.p_name name,p.p_shortInfo text,p.p_price price,p.p_listImg imgSrc from t_shoppingcart s,t_productsinfo p where s.u_id_fk=? and s.s_ifselect=1 and p.p_id=s.p_id_fk',[req.session.userId],res)
};

exports.createorder=function(req,res){
    var data=req.body.data
        ,name=req.body.name
        ,add=req.body.address
        ,tel=req.body.phone;
    var date=new Date();
    var order='#'+req.session.userId+date.getTime();
//    console.log(order);
    for(var i= 0,len=data.length;i<len;i++) {
        var temp=i;
        sql.selection('insert into t_orderlist(o_number,u_id_fk,o_address,o_receiver,o_tel,p_id,o_num) value(?,?,?,?,?,?,?)',
            [order,parseInt(req.session.userId), add, name, tel, data[temp].p_id, data[temp].num], function (d) {
            })
        sql.selection('delete from t_shoppingcart where s_id=?',[data[temp].s_id],function(data){
        })
    }
    res.send(null);
};










