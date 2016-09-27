
//var imgary=["./img/goods_info_imgs/1.jpg","./img/goods_info_imgs/2.jpg","./img/goods_info_imgs/3.jpg","./img/goods_info_imgs/4.jpg"]
// var p=1
//  function imgs(){
//      p++
//      if(p>4)
//        p=1
//      $(".imgt").css({"opacity":0})
//    $(".imgt").attr({src:imgary[p-1]});
//      $(".imgt").animate({
//        opacity:1
//      },1500);
//      $(".imgt").css({"opacity":0})
//}

// $("#imgone").click(function(){
//     var b=0
//     $(".imgt").attr({src:imgary[b]})
//      p=b+1
// })
//$("#imgtwo").click(function(){
//    var c=1
//    $(".imgt").attr({src:imgary[c]})
//    p=c+1
//})
//$("#imgthree").click(function(){
//    var d=2
//    $(".imgt").attr({src:imgary[d]})
//    p=d+1
//})
//$("#imgfour").click(function(){
//    var e=3
//    $(".imgt").attr({src:imgary[e]})
//    p=e+1
//})
//$(".raSpan").each(function(i){
//    console.log(i)
//     $(this).click(function(){
//         console.log(i)
//         $(".imgt").attr({src:imgary[i]})
//         p=i+1
//     })
//})
// setInterval(imgs,2000)

     $(".proshopping").click(function(){
         window.location.href="./goodsList.html"
     })
function seachfun($scope,$http){
   //平板电脑的显示与分页动态产生按钮
    $scope.page1=1;
    $scope.butlist=[];
    $scope.phonebutlist=[];
    $scope.seekbut=[];
    $scope.manymuch;
    $scope.thispage;
    ($scope.getButton=function(){
        $http.post("seachbut",{}).success(function(data){

        $scope.manymuch=parseInt(data)
        $scope.datamath=Math.ceil( $scope.manymuch/16)

        for(var i=1;i<=$scope.datamath;i++){
            $scope.butlist.push({num:i})
        }

        $scope.phonebut=Math.ceil($scope.manymuch/8)
        for(var i=1;i<=$scope.phonebut;i++){
            if(i == 1){
                $scope.phonebutlist.push({num:i,selected:true});
            }else{
                $scope.phonebutlist.push({num:i,selected:false});
            }


        }
            $scope.getListData();
    })
    })();
 //手机端产生按钮

   $scope.getListData=function(){
        $http.post("seachall",{b:0}).success(function(data){
        $scope.prolist=data;
        $scope.butlist[0].disabled=true;
        $("#pageup").css({"visibility":"hidden"});

        $scope.page=function(a){
            for(var j=0;j<$scope.butlist.length;j++)
                $scope.butlist[j].disabled = false
             $scope.butlist[a].disabled = true;
             if($scope.butlist[a].num>0){
                 $("#pageup").css({"visibility":"visible"})

             }
             if($scope.butlist[a].num>2){
                 $("#pagedown").css({"visibility":"hidden"})

                 }else{
                     $("#pagedown").css({"visibility":"visible"})
                 }
            var pageblock=($scope.butlist[a].num-1)*16

            $http.post("/pages",{thispage:pageblock}).success(function(data){
                $scope.prolist=data;
            })
        }

    })
    };



      $scope.pageup=function(){
             var c
            for(var i=0;i<$scope.butlist.length;i++){
                if($scope.butlist[i].disabled==true) {
                    c = (i - 1) * 16
//                    if (i-1==0) {
//                        $("#pageup").css({"visibility":"hidden"})
//                    }

                        $http.post("/pageup", {pageups:c}).success(function (data) {
                            $scope.prolist = data;
                             for(var j=0;j<$scope.butlist.length;j++)
                            $scope.butlist[j].disabled = false
//                            $scope.butlist[1].disabled = false
//                            $scope.butlist[2].disabled = false
//                            $scope.butlist[3].disabled = false
                            $scope.butlist[i - 1].disabled = true;
                            if (i==$scope.butlist.length-2) {
                        $("#pageup").css({"visibility":"hidden"})
                         }else{
                                $("#pageup").css({"visibility":"visible"})
                            }
                        })
                        if (i>3) {
                            $("#pagedown").css({"visibility":"hidden"})
                        }else{
                            $("#pagedown").css({"visibility":"visible"})
                        }
                        return;
                    }

            }
      }

      $scope.pagedown=function(){
          var v
          for(var i=0;i<$scope.butlist.length;i++){
              if($scope.butlist[i].disabled==true) {
                  v = (i+1)  * 16
//                    if (i-1==0) {
//                        $("#pageup").css({"visibility":"hidden"})
//                    }

                  $http.post("/pageup", {pageups: v}).success(function (data) {
                      $scope.prolist = data;
                      for(var j=0;j<$scope.butlist.length;j++)
                          $scope.butlist[j].disabled = false
//                            $scope.butlist[1].disabled = false
//                            $scope.butlist[2].disabled = false
//                            $scope.butlist[3].disabled = false
                      $scope.butlist[i + 1].disabled = true;
                      if (i==1) {
                          $("#pagedown").css({"visibility":"hidden"})
                      }else{
                          $("#pagedown").css({"visibility":"visible"})
                      }
                      if(i==0){
                          $("#pageup").css({"visibility":"hidden"})
                      }else{
                          $("#pageup").css({"visibility":"visible"})
                      }
                  })
                  return;
              }

          }
      }
//   $scope.phonepageup=function(){
//      console.log( $scope.page1)
//      var phonepage1=(parseInt($scope.page1)-1)*8
//       $http.post("phoneseach",{phone:phonepage1}).success(function(data){
//
//           $scope.prolist = data;
//       })
//   }
  $scope.suv=function(){
      var b= $("#facker :selected").text()
      if(b==1){
//          alert("已经是第一页了")
      }else{
          var pc=parseInt(b-2)*8
          $("#facker option").eq(parseInt(b-2))[0].selected=true;
          $http.post("/phonepageup",{q:pc}).success(function(data){
              $scope.prolist = data;
              $scope.page1=parseInt($scope.page1)-1
          })
      }
  }
$scope.suvdown=function(){
    var b= $("#facker :selected").text()
   if(b==7){
//       alert("已经最后一页了")
    }else{
        var c= parseInt(b)*8
        $("#facker option").eq(parseInt(b))[0].selected=true;
        $http.post("/phonedown",{q:c}).success(function(data){
            $scope.prolist = data;
        })
    }
}
     $("#facker").change(function(){
        var b= $("#facker :selected").text()
        var c= parseInt(b-1)*8
         $http.post("phoneseach",{phone:c}).success(function(data){

             $scope.prolist = data;
         })

     })
    $scope.seek=function(){
         if(typeof $scope.seekname=='string'&&$scope.seekname!=undefined){
             $http.post("/seekpage",{name:$scope.seekname}).success(function(data){
                  var b= Math.ceil(parseInt(data)/16)
                 $scope.seekbut=[];
                 for(var i=1; i<=b;i++){
                     $scope.seekbut.push({num:i})
                 }
                 $(".seekdiv").css("display","block")
                 $(".butdiv").css("display","none")
                     $http.post("/seekone",{pageone:0,name:$scope.seekname}).success(function(data){

                         $scope.prolist = data;
                     })

             })
         }
    }
//    $scope.seekpage=function(q){
//        for(var j=0;j<$scope.seekbut.length;j++)
//            $scope.seekbut[j].disabled = false
//         $scope.seekbut[q].disabled = true;
//        var seeks=(parseInt($scope.seekbut[q].num)-1)*16
//        $http.post("/seekpages",{mypage:seeks,name:$scope.seekname}).success(function(data){
//            $scope.prolist = data;
//        })
//    }
//}

