/**
 * Created by Administrator on 15-4-24.
 */

var username='';

$(function(){
    $.get('getSession',function(data){
        if(data.user){
            username=data.user;
        }else{
            window.location.href='login.html';
        }
    })
});

function mainTableCtrl($scope,$http){
    $scope.items={};
    $scope.ifpages=false;
    $scope.isInit=false;
    $scope.isPhone=screen.availWidth<768;
    $scope.finalp=0;
    $scope.finalc=0;
    ($scope.loadtable=function(){
        $http.get('shoppingCart/table').success(function(data){
            if(data.data) {
                $scope.isInit=true;
                $scope.items = data.data;
                for (var i = 0, len = $scope.items.length; i < len; i++) {
                    $scope.items[i].num = 1;
                    $scope.items[i].check = true;
                    $scope.items[i].allPrice = $scope.items[i].price;
                }
                $scope.finalprice();
            }else{
                $scope.isInit=false;
            }
        })
    })();
//    $scope.createBtns=function(){
//
//    };
    $scope.deleteItem=function(id){
        $http.post('shoppingCart/deleteItem',{id:id}).success(function(){
            $scope.loadtable();
        })
    };
    $scope.changenum=function(data,num,crtl){
        if(crtl){
            if(crtl=='-'){
                $scope.items[num].num=$scope.items[num].num-1;
                if($scope.items[num].num<1) $scope.items[num].num=1;
            }else{
                $scope.items[num].num=parseInt($scope.items[num].num)+1;
                if($scope.items[num].num>20) $scope.items[num].num=20;
            }
            data.allPrice=data.price*$scope.items[num].num;
            $scope.finalprice();
        }else{
            if(/^[0-9]+$/.test($scope.items[num].num)){
                if($scope.items[num].num<1) $scope.items[num].num=1;
                if($scope.items[num].num>20) $scope.items[num].num=20;
                data.allPrice=data.price*$scope.items[num].num;
                $scope.finalprice();
            }
            if(!parseInt($scope.items[num].num)){
                $scope.items[num].num=1;
                data.allPrice=data.price*$scope.items[num].num;
                $scope.finalprice();
            }
        }
    };
    $scope.changesselect=function(){
        for(var i=0,len=$scope.items.length;i<len;i++){
            if(!$scope.items[i].check){
                $('#allCheckbox')[0].checked=false;
                $scope.finalprice();
                return;
            }
        }
        $('#allCheckbox')[0].checked=true;
        $scope.finalprice();
    };
    $scope.finalprice=function(){
        $scope.finalp=0;
        $scope.finalc=0;
        for(var i in $scope.items){
            if($scope.items[i].check){
                $scope.finalp+= $scope.items[i].allPrice;
                $scope.finalc+=parseInt($scope.items[i].num);
            }
        }
    };
    $scope.selectall=function(){
        for(var i=0,len=$scope.items.length;i<len;i++) {
            $scope.items[i].check=$('#allCheckbox')[0].checked;
        }
        $scope.finalprice();
    };

    $scope.submitorder=function(){
        var data=[],temp;
        for(var i=0,len=$scope.items.length;i<len;i++) {
            temp={};
            temp.id=$scope.items[i].id;
            temp.num=$scope.items[i].num;
            $scope.items[i].check? temp.select=1:temp.select=0;
            data.push(temp);
        }
        $http.post('shoppingCart/submit',{data:data}).success(function(data){
            window.location=data;
        })
    };
}






