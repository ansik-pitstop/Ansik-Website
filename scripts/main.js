/* 
 Initialization
 */

var app = angular.module('PitStopWebsite', ['firebase', 'ui.router', 'ngAnimate']);

/*
 Routing And Stuff
 */

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })

        .state('careers', {
            url: '/careers',
            templateUrl: 'partials/careers.html',
            controller: 'careersCtrl'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html',
            controller: 'contactCtrl'
        })

});


/*
 Controllers
 */

app.controller('homeCtrl', function ($scope) {

    /*
     Initialization
     */


    /*
     Ui Tweaks
     */

});

app.controller('contactCtrl', function ($scope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('careersCtrl', function ($scope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

/*
 Directives
 */