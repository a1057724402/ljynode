/**
 * Created by Administrator on 15-4-24.
 */

$(document).ready(function(){
    goodsListId();//获取页面数据
    discussNum();//查询评论条数
    discuss();//读取评论信息
//    notDiscuss();//没有评价 显示信息
});


var stat;//星星点击状态
var nowPage=1;//当前页数
var maxPage;//最大页数
var pageNum=5;//每页显示评论条数
var userName;//用户名称
var userId;//用户id
//更改图片路径
function changeImg(event){
    $('.wine_img1').attr("src",event.target.src)
    $('.zoomImg').attr("src",event.target.src)
}
//计时器
function time(){
    var t=new Date();
    y= t.getFullYear();
    M= t.getMonth();
    d= t.getDate();
    h= t.getHours();
    m= t.getMinutes();
//    s= t.getSeconds();

    nowTime=y+"-"+M+"-"+d+" "+h+":"+m;
    return nowTime
}
function getUser(fun){
    $.post("/getUser",function(d){
        userName=d.userName;
        userId=d.userId;
        fun();
    },"json")
}
//获取页面数据
function goodsListId(){
    var id= $.query.get("id");
    $.get("/goodsListId",{"id":id},function(d){
        $(".wine_img1").attr('src',d.data[0].p_allImg.split(",")[0]);
        $(".wine_img2").attr('src',d.data[0].p_allImg.split(",")[0]);
        $(".wine_img3").attr('src',d.data[0].p_allImg.split(",")[1]);
        $(".wine_img4").attr('src',d.data[0].p_allImg.split(",")[2]);
//        $("#wine_img4").attr('src',"./img/goodsList_img/email-wine-poster.jpg")
        $("#wine_name").html(d.data[0].p_name+"");
        $("#price").html(d.data[0].p_price+"");
        $("#mainInfo").html(d.data[0].p_mainInfo+"");
//        放大镜用
        $('#image1').zoombie();
        $("#img_01").zoombieLens();
        getUser(function(){
            $.post("/addCartChack",{"userId":userId,"id":id},function(d){
                if(d.data=="0"){
                    $("#goodsCart").css({"display":"none"});
                    $("#addGoods").css({"display":"block"});
                }else{
                    $("#goodsCart").css({"display":"block"});
                    $("#addGoods").css({"display":"none"});
                }
            },"json")
        })
    },"json");
}

//添加到购物车
function addGoods(){
    getUser(function(){
        if(userId){
            var id= $.query.get("id");
            $.post('/addGoods',{"userId":userId,"id":id},function(d){
                $("#goodsCart").css({"display":"block"});
                $("#addGoods").css({"display":"none"});
            },"json")
        }else{
            location.href = "login.html"
        }
    });

}

//查询评论条数 生成页码
function discussNum(){
    var id= $.query.get("id");
    $.post("/discussNum",{"id":id},function(d){
        maxPage= Math.ceil(d.data/pageNum);
        $("#pc_page").html("");
        $("#phone_page").html("");
        //pc端
        for(var i=1;i<=maxPage;i++){
//            $("<button class='but_margin' onclick='page(event)'>"+i+"</button>").appendTo("#pc_page")
            $("<button class='btn bg-info but_margin' onclick='page(event)'>"+i+"</button>").appendTo("#pc_page")
        }
//        phone端
        for(var i=1;i<=maxPage;i++){
            $("<option>"+i+"</option>").appendTo("#phone_page")
        };
        if(d.data!='0'){
            if(1){
                $("#pc_page button:first-child").attr("disabled",true);//初始默认第一页禁用
                $("#beforePage").css({"visibility":"hidden"});//pc端
                $("#phone_page").css({"visibility":"visible"});//手机端
                $("#phone_beforePage").css({"visibility":"hidden"});//手机端
            }
            if(maxPage>1){
                $("#nextPage").css({"visibility":"visible"});//pc端
                $("#phone_nextPage").css({"visibility":"visible"});//手机端
                $("#phone_page").css({"visibility":"visible"});//手机端
            }else{
                $("#nextPage").css({"visibility":"hidden"});//pc端
                $("#phone_page").css({"visibility":"visible"});//手机端
                $("#phone_nextPage").css({"visibility":"hidden"});//手机端
            }
        }else{
            $("#beforePage").css({"visibility":"hidden"});//pc端
            $("#nextPage").css({"visibility":"hidden"});//pc端
            $("#phone_beforePage").css({"visibility":"hidden"});//手机端
            $("#phone_page").css({"visibility":"hidden"});//手机端
            $("#phone_nextPage").css({"visibility":"hidden"});//手机端
        }
    })
}

//清除评论
function clearDiscuss(){
    $("#discuss").html('');
}
//pc端页面点击切换
function page(event){
    nowPage=$(event.target).html();
    $(event.target).prevAll().attr("disabled",false);
    $(event.target).attr("disabled",true);
    $(event.target).nextAll().attr("disabled",false);
//    event.target.disabled=true;//禁用当前
    befNextChack();
    clearDiscuss();//清除评论
    discuss();//显示评论
}
//phone
function phone_page(){
    nowPage=$("#phone_page option:selected").val();
    phone_befNextChack();
    clearDiscuss();//清除评论
    discuss();//显示评论
}

//pc端上一页下一页隐藏显示判断
function befNextChack(){
        if(nowPage==1){
            $("#beforePage").css({"visibility":"hidden"})
        }else{
            $("#beforePage").css({'visibility':"visible"})
        }
        if(nowPage==maxPage){
            $("#nextPage").css({"visibility":"hidden"})
        }
        else{
            $("#nextPage").css({'visibility':"visible"})
        }
}
//phone端上一页下一页隐藏显示判断
function phone_befNextChack(){

        nowPage=parseInt($("#phone_page option:selected").val());
        if(nowPage==1){
            $("#phone_beforePage").css({"visibility":"hidden"})
        }else{
            $("#phone_beforePage").css({'visibility':"visible"})
        }
        if(nowPage==maxPage){
            $("#phone_nextPage").css({"visibility":"hidden"})
        }
        else{
            $("#phone_nextPage").css({'visibility':"visible"})
        }


}
//pc端上一页
function beforePage(){
    $("#pc_page button:nth-child("+nowPage+")").attr("disabled",false);
    nowPage--;
    $("#pc_page button:nth-child("+nowPage+")").attr("disabled",true);
    befNextChack();
    clearDiscuss();//清除评论
    discuss();//显示评论
}
//phone上一页
function phone_beforePage(){
    nowPage=parseInt($("#phone_page option:selected").val())-1;
    $("#phone_page option:selected").prev().attr({"selected":"selected"});
//    nowPage=parseInt($("#phone_page option:selected").val());
    phone_befNextChack();
    clearDiscuss();//清除评论
    discuss();//显示评论
}
//pc端下一页
function nextPage(){
    $("#pc_page button:nth-child("+nowPage+")").attr("disabled",false);
    nowPage++;
    $("#pc_page button:nth-child("+nowPage+")").attr("disabled",true);
    befNextChack();
    clearDiscuss();//清除评论
    discuss();//显示评论
}
//phone端下一页
function phone_nextPage(){
    nowPage=parseInt($("#phone_page option:selected").val())+1;
    $("#phone_page option:selected").next().attr({"selected":"selected"});
//    nowPage=parseInt($("#phone_page option:selected").val());
    phone_befNextChack();
    clearDiscuss();//清除评论
    discuss();//显示评论
}
//读取评论信息
function discuss(){
     var id= $.query.get("id");
    $.post("/discuss",{"id":id,"nowPage":nowPage,"pageNum":pageNum},function(d){
        var str="";
        //检测是否有评论信息
        if(d.data.length=="0"){
            $("#noDiscuss").css({"display":"block"})
        }else{
            $("#noDiscuss").css({"display":"none"})
        }
        $(d.data).each(function(i){
            str="<div class='col-lg-8 col-lg-push-2 col-xs-12 border background1'><div class='col-lg-3 visible-lg'><img src='"
                +d.data[i].u_pic+"' alt='头像' class='col-lg-8 col-lg-push-2  margin-top3' /><div class='col-lg-12 text-center font_style4'>"
                +d.data[i].u_name
                +"</div></div><div class='col-xs-12 visible-xs'><div class='col-xs-12 font_style4'>"
                +d.data[i].u_name+"</div></div><div class='col-lg-9 col-xs-12'><div class='col-lg-8 col-xs-5 stars'>"+d.data[i].d_score+"</div><div class='col-lg-4 col-xs-7 font_style6'>"
                + d.data[i].d_time+"</div><div class='col-lg-12 col-xs-12 font_style5 margin-top3'>"
                +d.data[i].d_mainText+"</div></div></div>";
            $(str).appendTo("#discuss")
        });
    },"json");
}

//添加评论
function addDiscuss(){
    getUser(function() {
        if (userId) {
            var id = $.query.get("id");
            var discussMessage = $("#discussMessage").val();
            var starsColor = $("#stars").html();
            $("#discussMessage").val("");
            $('.stars ul li').css({"color": "#cfcfcf"});
            var content = $("#content").val();
            $.post("/discussMessage", {"id": id, "userName": userName, "starsColor": starsColor, "discussMessage": discussMessage, "nowTime": time()}, function (d) {
//                console.log(d.data);
                if (d.data == "success") {
                    nowPage = 1;
                    clearDiscuss();//清除评论
                    discuss();//显示评论
                    discussNum();
                }
            }, "json")
        } else {
            location.href = "login.html"
        }
    })
}
//评星
$('.stars ul').mouseover(function(event){
    $(event.target).prevAll().css({"color":"#efe800"});
    $(event.target).css({"color":"#efe800"});
    $(event.target).nextAll().css({"color":"#cfcfcf"});
    statu=0
});
$('.stars ul').click(function(event){
    statu=1;
});
$('.stars ul').mouseout(function(event){
    if(statu==0){
        $(event.target).css({"color":"#cfcfcf"});
        $(event.target).prevAll().css({"color":"#cfcfcf"});
    }
});


