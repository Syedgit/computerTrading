
angular.module('computerTrading').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .state('contact',{
      url:'/contact',
      templateUrl:'views/contact.html',
      controller:'ContactController'
    }).
    state('inventory',{
    url:'/inventory',
    templateUrl:'views/inventory.html',
    controller:'InventoryController'
    }).
    state('laptop',{
      url:'/laptop',
      templateUrl:'views/laptop.html',
      controller:'LaptopController'
    })
    .
    state('desktop',{
       url:'/desktop',
      templateUrl:'views/desktop.html',
      controller:'DesktopController'
    })
    .
    state('monitor',{
       url:'/monitor',
      templateUrl:'views/monitor.html',
      controller:'MonitorController'
    });
});
