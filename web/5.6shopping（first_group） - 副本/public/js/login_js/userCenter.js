/**
 * Created by Administrator on 15-4-29.
 */
var currentUser="";
$(function(){
    personalCenter();

    $(".subNav ul li").click(function(){
        $(".subNav ul li").each(function(){
            $(this).removeClass("activeList")
        })
        $(this).addClass("activeList");
    })
})


function showAddrPanel(){
    $(".content,.sideContent,.basicInfo").css("display","none")
    $(".address").css("display","block")
}

//订单
function orderList($scope,$http){
    $scope.isHaveOrder=true;
    $scope.isShowDetail=false;
    $scope.getOrderInfo=function(){
        $http.post("/getOrderInfo").success(function(data){
//            console.log(data)
            $scope.items=data;
            if(data.length!=0){
                $scope.isHaveOrder=false;
            }
        })
    }
    $scope.getOrderNowInfo=function(o_num){
        $(".orderListDetailDiv").css("top",$(event.target).offset().top-130+"px")
        $http.post("/getOrderNowInfo",{orderNum:o_num}).success(function(data){
            $scope.orderDetail=data;
            if(data.length!=0){
                $scope.isShowDetail?$scope.isShowDetail=false:$scope.isShowDetail=true;
            }
        })
    }



    $scope.getOrderInfo();

}

function Center($scope,$http){
//    初始变量

    $scope.edit="编辑";
//    初始时 加载数据 函数
    $scope.getSession=function(){
        $http.get("/getSession").success(function(data){
            if(data.user){
                $scope.currentUser=data.user;
                $scope.getUserInfo();
                $scope.getCartNum();
                $scope.getRelativePro();
                $scope.getAddrs();
                $scope.getProvince();
            }else{
                window.location="login.html";
            }
        })
    }
    $scope.getUserInfo=function(){
        $http.post("/getUserInfo",{userName:$scope.currentUser}).success(function(data){
            $scope.userPhone=data[0].u_phone;
            $scope.userEmail=data[0].u_email;
        })
    }
    $scope.getCartNum=function(){
        $http.post("/getCartNum",{userName:$scope.currentUser}).success(function(data){
            $scope.cartProNum=data[0].pNum;
        })
    }

    $scope.getAddrs=function(){
        $http.post("/getAddrs",{userName:$scope.currentUser}).success(function(data){
            if(data.addr!=null){
                var addrArray=data.addr.split(";");
                $scope.addr=[];
                for(var i=0;i<addrArray.length;i++){
                    var temp=addrArray[i].split(",")
                    $scope.addr.push({
                        receiveName:temp[0],
                        receiveAddr:temp[1],
                        receivePhone:temp[2],
                        defaultLabel:temp[3]
                    })
                }
            }else{$scope.addr=[]}
        })
    }

    $scope.getRelativePro=function(){
        $http.post("/getRelativePro",{userName:$scope.currentUser}).success(function(data){
            for(var i in data){
                data[i].p_listImg=data[i].p_listImg;
            }
            $scope.relativePro=data;
        })
    }

    $scope.getProvince=function(){
        $http.post("/getProvince").success(function(data){
            $scope.provinces=data;
        })
    }

    $scope.getCity=function(){
        $(".province").one("click",function(){
            $scope.crtProv=$(".province option:selected").html()

//            $http.post("/getCity",{currentProv:$scope.crtProv}).success(function(data){
//                $scope.citys=data;
//            })

        })

    }

    $scope.ini=function(){
        $scope.showBalance="true";
        $scope.getSession();
    }
    $scope.ini();

//    加载后 操作函数

//    添加送货地址
    $scope.showAddDiv=function(){
        $scope.isShowAddDiv?$scope.isShowAddDiv=false:$scope.isShowAddDiv=true;
    }
    $scope.addAddr=function(){

        $scope.crtAddr=$(".province option:selected").html()+$scope.receiveAddr;

        if($scope.receiveName && $scope.receiveAddr && $scope.receivePhone){
            $http.post("/addAddr",{addr:";"+$scope.receiveName+','+$scope.crtAddr+','+$scope.receivePhone})
                .success(function(data){
                    if(data=="1"){
                        $scope.getAddrs();
                    }
                    $scope.isShowAddDiv=false;
                })
        }
        else{
            $scope.addMsg="信息必须完整"
        }
    }

    $scope.delAddr=function(index){
        $http.post("/delAddr",{index:index})
            .success(function(data){
                if(data=="1"){
                    $scope.getAddrs();
                }
            })
    }

    $scope.setDefaultAddr=function(index){
        $http.post("/setDefaultAddr",{index:index})
            .success(function(data){
                if(data=="1"){
                    $scope.getAddrs();
                }
            })
    }

    $scope.changePanel=function(which){
        $(".panelDiv").css("display","none");
        $("#"+which).css("display","block");
    }



//    基本信息修改
    $scope.enableEditFunc=function(){
        $scope.enableEdit?$scope.enableEdit=false:$scope.enableEdit=true;
        $scope.edit=="编辑"?$scope.edit="取消":$scope.edit="编辑";
    }

    $scope.cfModify=function(){
        $scope.enableEdit=false;
        $scope.edit="编辑";
        $http.post("/modifyUserInfo",{phone:$scope.userPhone,email:$scope.userEmail}).success(function(data){
            if(data=="1"){
                if(enableEdit){
                    $scope.modifyMsg="修改成功"
                }
            }
            $scope.getUserInfo();
        })
    }
}