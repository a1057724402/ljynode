/**
 * Created by Administrator on 15-4-29.
 */
$(function(){
    getSession();
})
function getSession(){
    $.ajax({
        type:"get",
        url:"/getSession",
        success:function(data){
            if(data.user!="undefined"){
                $("#sessionSpan").html(data.user)
            }
            else{
                window.location="login.html";
            }
        }
    })
}
//function getXmlHttpRequest(){
//    var xhr=null;
//    if((typeof XMLHttpRequest)!="undefined"){
//        xhr=new XMLHttpRequest();
//    }else{
//        xhr=new ActiveXObject("Microsoft.XMLHttp")
//    }
//    return xhr;
//}
//
//function getSession(){
//    var xhr=getXmlHttpRequest();
//    xhr.open("get","/getSession",true);
////    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//    xhr.onreadystatechange=function(){
//        if(xhr.status==200&&xhr.readyState==4){
//            console.log(xhr.responseText)
//            document.getElementById("sessionSpan").innerHTML=xhr.responseText
//
//        }
//    }
//    xhr.send(null);
//}
////注销session
function outSession(){
    $.ajax({
        url:"/outSession",
        type:"post",
        dataType:"json",
        success:function(data){
            $("#sessionSpan").html(data.mag)
        }
    })
}

//对个人中心的进入判断
function personalCenterOne(){
    $.ajax({
        url:"/personalCenter",
        type:"post",
        dataType:"json",
        success:function(data){
            if(data.mag!=undefined){
                window.location="userCenter.html"

            }else{
                window.location="login.html"
            }
        }
    })
}

function personalCenter(){
    $.ajax({
        url:"/personalCenter",
        type:"post",
        dataType:"json",
        success:function(data){
            if(data.mag!=undefined){
//                window.location="userCenter.html"

            }else{
                window.location="login.html"
            }
        }
    })
}

//对返回顶部的操作；
function backTop(){
    $(".backToTop_img").css({height:"135px",background:"url('img/head_foot/top.png') no-repeat -344px -20px"})
        goTop("80%",200,"197px",'-790px',goTop("40%",200,"160px",'-644px',goTop("20%",200,"150px",'-492px')))
}
function goTop(percentage,timeT,HeightT,siteT){
    $(".backToTop").animate({bottom:percentage},timeT,function(){
        $(".backToTop_img").css({height:HeightT,background:"url('img/head_foot/top.png') no-repeat"+" " +siteT+" "+"-20px"});
        if(percentage=="80%"){
            test()
        }
    })
}
function test(){
    $("body").scrollTop(0)
    $(".backToTop").css({bottom:"0%"})
    $(".backToTop_img").css({height:"104px",background:"url('img/head_foot/top.png') no-repeat -45px -20px"});
}


$(function(){
    $(".backToTop_img").hover(function(){
        $(".backToTop_img").css({height:"104px",background:"url('img/head_foot/top.png') no-repeat -194px -20px"});
    },function(){
        $(".backToTop_img").css({height:"104px",background:"url('img/head_foot/top.png') no-repeat -45px -20px"});
    })
})


//$(function(){
//    var reg=/Chrome/
////    console.log(reg.test(navigator.appVersion))
//    console.log(navigator.appVersion)
//})



