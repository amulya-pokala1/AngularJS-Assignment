var app=angular.module('GetCall',["ngRoute"])
    .controller('getCallController',function($scope, $http){
    	console.log("hey1")
        $scope.gett=function()
        {
            $http.get('http://localhost:8080/Messgener/webapi/messages/').then(function(response)
            {
                console.log("hey")
                console.log(response.data);
                $scope.profiles=response.data;
            });
        }
       
        $scope.del=function(name){
            console.log(name)
            $http.delete('http://localhost:8080/Messgener/webapi/messages/'+name).then(function(response)
        {
        	console.log(response.data);
        });
        }
        $scope.update=function(name)
        {
            console.log("updating")
            $scope.putObj={"profile_name": $scope.namePut, "NoOfFriends": $scope.friendsPut, "About": $scope.aboutPut}
            $http.put('http://localhost:8080/Messgener/webapi/messages/'+name, $scope.putObj).then(function(response){

                console.log(response);
            });
        }
        $scope.create=function()
        {
            console.log("creating")
            $scope.postObj={"profile_name": $scope.namePost, "NoOfFriends": $scope.friendsPost, "About": $scope.aboutPost}
            $http.post('http://localhost:8080/Messgener/webapi/messages/create',$scope.postObj).then(function(response){

                console.log(response);
            });
        }
    
        
});
app.config(function($routeProvider){
    $routeProvider
    
    .when("/profiles",{
        templateUrl:"profiles.html"
    })
    .when("/update",{
        templateUrl:"update.html"
    })
    .when("/create",{
        templateUrl:"create.html"
    })
});