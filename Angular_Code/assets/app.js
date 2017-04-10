var mbbmApp = angular.module('mbbmApp', ['ui.router']);
var mbbmApi = "http://ziptag.in:3000";

mbbmApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // BILLING SECTION ========================================
    .state('billing', {
        url: '/billing',
        templateUrl: 'billing.html'
    })

    // Manage Stocks
    .state('brands',  {
        url: '/brands',
        templateUrl: 'brand.html',
        controller: 'brandController'
    })

    .state('home', {
        url: '/',
        template: '<h3>Welcome to MBBM CRM System</h3>'
    });
});

mbbmApp.controller('brandController', function($scope, $http) {
    $http.get(mbbmApi + "/api/brands/")
    .then(function(res) {
        console.log(res);
    }, function(err) {
        console.log(err);
    })
    
    
});