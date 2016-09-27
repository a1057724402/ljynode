/**
 * Created by Administrator on 15-4-24.
 */

// 全局变量
var imgs=["bosa.jpg",
            "bottleRocket.jpg",
            "wineKingdom.jpg",
            "winePlace.jpg",
            "bistro.jpg",
            "vinoBraino.jpg",
            "gaucho.jpg",
            "wirewine.jpg",
            "winecastle.jpg",
            "newcastle.jpg",
            "wine.jpg",
            "sancti.jpg",
            "swisswine.jpg",
            "hanuet.jpg",
            "bodegas.jpg"]

function LoginInfo($scope,$http){
    $scope.login=function(valid){
        if(valid){
            $http.post("/login",{userName:$scope.userName,pwd:$scope.pwd}).success(function(data){
                if(data=="1"){
                    window.location="index.html";
                }else{
                    $scope.loginMsg="帐号或密码错误"
                }
            })
        }
    }
}

$(function(){
    showImgs();
    $(".toRegister a,.toLogin a").click(function(){
        $(".loginDiv").slideToggle("fast")
        $(".registerDiv").slideToggle("fast")
    })
})
function showImgs(){
    var frags=document.createDocumentFragment();
    for(var i=0;i<9;i++){
        node=null;
        node=document.createElement("img");
        node.className="col-lg-4 hover";
        node.src="img/login-img/"+imgs[Math.ceil(Math.random()*imgs.length-1)];
        frags.appendChild(node);
    }
    $("#imgs").append(frags);

    // 每隔一段时间 随机更换图片
    var t_changeImg=setInterval(function(){
        var randomI=Math.ceil(Math.random()*$("#imgs").children().length-1);

        $("#imgs").children().eq(randomI)
        .attr("src","img/login-img/"+imgs[Math.ceil(Math.random()*imgs.length-1)])
        .css("opacity","0")
        .animate({opacity: 1},500)
    }, 1000*2)
}