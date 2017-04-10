var mbbmApp = angular.module('mbbmApp', ['ui.router']);

mbbmApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // BILLING SECTION ========================================
    .state('billing', {
        url: '/billing',
        templateUrl: 'components/billing/billing.html'
    })
});