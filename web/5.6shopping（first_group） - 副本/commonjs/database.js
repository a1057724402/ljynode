/**
 * Created by Administrator on 2015-4-14.
 *  by bdk
 *  demo s使用mysql 模块链接 mysql 数据库
 */
// 引用mysql 模块
var mysql      = require('mysql');

/**
 *    获得链接对象
 * @returns {*}   链接对象
 */


function getConAPI(){
    var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'admin',
        database:'shoppinginfo'
    });

    return con;
}

//分页查询
function queryByPage(con,curpage,eachpage,sql,param,func){
    if(!curpage || curpage <= 0){
        curpage = 1;
    }
    if(!func){
        func = param;
        param = [];
    }
    con.query("select count(*) cnt from ("+sql+") t",param,function(e,r,f){
        //获取总数量
        var count = r[0].cnt;
        //获取总页码
        var maxpage = Math.ceil(count/eachpage);
        sql += " limit "+((curpage-1)*eachpage)+","+eachpage;
        var inner_con = getConAPI();
        inner_con.query(sql,param,function(e,r,f){


            var page = {"curpage":curpage,"maxpage":maxpage,"eachpage":eachpage};
            func(e,r,f,page);

        });
        inner_con.end();

    });

}
exports.getCon = getConAPI;
exports.queryByPage = queryByPage;