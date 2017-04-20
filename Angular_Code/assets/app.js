'use strict'

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


// mbbmApp.service('brandService', function() {
//     this.GetAllBrands = function() {
//         return { name: "Shabana" };

//         // $http.get(mbbmApi + "/api/brands/")
//         // .then(function(res) {
//         //     return res.data;            
//         // }, function(err) {
//         //     console.log(err);
//         // });
//     };
// });

//mbbmApp.service('brandService', brandService);

mbbmApp.controller('brandController', function($scope, $http, brandService) {
    //console.log(brandService.GetAllBrands());
    //var x = brandService.GetAllBrands;
    //console.log("test");
    // $http.get(mbbmApi + "/api/brands/")
    //     .then(function(res) {
    //         $scope.brands = res.data;            
    //     }, function(err) {
    //         console.log(err);
    //     });
    $scope.brands = brandService.GetAllBrands;
});


var brandService = function($http) {
    this.GetAllBrands =   function() {
        return { name: "Shabana" };

        $http.get(mbbmApi + "/api/brands/")
        .then(function(res) {
            return res.data;            
        }, function(err) {
            console.log(err);
        });
    };
};