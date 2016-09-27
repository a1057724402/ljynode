/**
 * Created by smjor6 on 15-4-29.
 */


//get lastProducts
function lastProController($scope,$http){
    //products info
    $scope.lastProducts=function(){
        $http.post("/lastProducts").success(function(data){
            $scope.lastProducts=data.mag
//            console.log(data.mag[0].p_allimg.split(",")[0])
//            console.log(data.mag)
        })
    }
    $scope.lastProducts();
    //products click go to list
}

//get hotsProducts
function hotsProController($scope,$http){
    $scope.hotsProducts=function(){
        $http.post("/hotsProducts").success(function(data){
            $scope.hotsProducts=data.mag
        })
    }
    $scope.hotsProducts();
}
