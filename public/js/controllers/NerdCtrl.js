angular.module('NerdCtrl', []).controller('NerdController', function($scope,Nerd) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.user = {};
    $scope.submit = function (){
  		Nerd.create($scope.user).then(function(res){
  			console.log(res)
  		});
  		console.log($scope.user);
	}
	Nerd.get().then(function(res){
    console.log('Users',res.data);
	});
    

});