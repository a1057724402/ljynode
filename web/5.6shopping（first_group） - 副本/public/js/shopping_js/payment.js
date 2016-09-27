/**
 * Created by Administrator on 15-4-27.
 */

var username='';

$(function(){
    $.get('getSession',function(data){
        if(!data.user){
            window.location='login.html';
        }else{
            username=data.user;
        }
    })
});

function mainTableCtrl($scope,$http){
    $scope.items=[];
    $scope.ifpages=false;
    $scope.isInit=false;
    $scope.isPhone=screen.availWidth<1200;
    $scope.totalPrice=0;
    $scope.allCheck=false;
    $scope.sendAddress='';
    $scope.addressTip='';
    $scope.sendName='';
    $scope.nameTip='';
    $scope.sendPhone='';
    $scope.phoneTip='';
    $scope.itemsNum=0;
    $scope.loadtable=function(){
        $http.get('payment/table').success(function(data){
            if(data.length) {
                $scope.isInit=true;
                $scope.items = data;
                for (var i = 0, len = $scope.items.length; i < len; i++) {
                    $scope.items[i].allPrice = $scope.items[i].price * $scope.items[i].num;
                    $scope.itemsNum += $scope.items[i].num;
                    $scope.totalPrice += $scope.items[i].allPrice;
                }
            }
        })
    };
//    $scope.createBtns=function(){
//    };
    $scope.checkaddress=function(){
        var reg=/^\w|[\u4e00-\u9fa5]+$/;
        if(reg.test($scope.sendAddress)){
            $scope.addressTip='';
            return true;
        }else{
            $scope.addressTip='请输入送货地址';
            return false;
        }
    };
    $scope.checkname=function(){
        var reg=/^\w|[\u4e00-\u9fa5]+$/;
        if(reg.test($scope.sendName)){
            $scope.nameTip='';
            return true;
        }else{
            $scope.nameTip='请输入收货人';
            return false;
        }
    };
    $scope.checkphone=function(){
        var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(reg.test($scope.sendPhone)){
            $scope.phoneTip='';
            return true;
        }else{
            $scope.phoneTip='请输入正确的联系方式';
            return false;
        }
    };

    $scope.createOrder=function(){
        if($scope.checkaddress()&&$scope.checkname()&&$scope.checkphone()){
            $http.post('payment/order',{data:$scope.items,address:$scope.sendAddress,name:$scope.sendName,phone:$scope.sendPhone}).success(function(){
                window.location="goIndex.html"
            })
        }
    };


    $scope.loadtable();

}











