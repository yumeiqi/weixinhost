var app = angular.module('weixinhostApp',['ui.router']);

// // /*controller*/
// app.controller("termCtrl",function($scope){
// })

// // .controller("IndexCtrl",function($scope){
// // })

// app.controller("aboutCtrl",function($scope){
// })

// // .controller("PartnersCtrl",function($scope){
// // })

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider




    .state('tab', {
        url: '/tab',
        abstract: true,
        // templateUrl: 'tab.html',
        template:'<div ui-view></div>',
        // controller: "aboutCtrl"
    })

    .state('tab.index', {
        url: '/index',
        views: {
            '': {
                templateUrl: 'index.html',
                // controller: 'ProductListCtrl',
            }
        },
    })

    // .state('tab.index', {
    //     url: '/index',
    //     templateUrl: 'index.html',
    //     // controller: "aboutCtrl"
    // })

    .state('tab.about', {
        url: '/about',
        templateUrl: 'about.html',
        // controller: "termCtrl"
    })

    .state('tab.term', {
        url: '/term',
        templateUrl: 'term.html',
        // controller: "termCtrl"
    })

    $urlRouterProvider.otherwise('/tab/index');


})

