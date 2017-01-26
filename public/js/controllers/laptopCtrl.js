angular.module('computerTrading').controller('LaptopController', function($scope,LaptopService) {
	'use strict';
    $scope.text = 'this is laptop controller';
    LaptopService.get().then(function(response){
    	console.log('laptop',response.data);
    	$scope.data = response.data;
    });

});