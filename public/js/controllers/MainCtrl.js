angular.module('computerTrading').controller('MainController', function($scope,$state) {
	'use strict';
    $scope.tagline = 'To the moon and back!'; 
    $state.transitionTo('home.monitor');  
    $state.transitionTo('home.desktop'); 
    $state.transitionTo('home.laptop'); 

});