/**
 * Created by Administrator on 15-4-29.
 */

function Register($scope,$http){
    $scope.form={};
    $scope.checkName=function(){
        $http.post("/checkName",{userName:$scope.form.userName}).success(function(data){
            if(data=="1"){
                $scope.nameMsg="帐号已存在"
                $scope.isWrong="wrong"
                $scope.namevalid=false;

            }else{
                $scope.nameMsg="帐号可以使用"
                $scope.isWrong="right";
                $scope.namevalid=true;

            }
        })
    }
    $scope.checkMail=function(){
        $http.post("/checkMail",{mail:$scope.form.email}).success(function(data){
//            console.log(data)
            if(data=="1"){
                $scope.mailMsg="邮箱已存在"
                $scope.isWrong="wrong";
                $scope.mailValid=false;
            }else{
                $scope.mailMsg="邮箱可以使用"
                $scope.isWrong="right"
                $scope.mailValid=true;
            }
        })
    }
    $scope.cfRegister=function(valid){
        if(valid  && $scope.namevalid && $scope.mailValid){
            $http.post("/register",{userName:$scope.form.userName,pwd:$scope.form.pwd,email:$scope.form.email}).success(function(data){
                if(data=="1"){
                    $http.post("/login",{userName:$scope.form.userName,pwd:$scope.form.pwd}).success(function(data){
                        if(data=="1"){
                            window.location="index.html";
                        }
                    })

                    window.location="index.html";
                }
            })
        }
    }

}