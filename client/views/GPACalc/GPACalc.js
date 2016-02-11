'use strict';

console.log("main.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('GPACalc', {
                url: '/GPACalc',
                templateUrl: 'views/GPACalc/GPACalc.html',
                controller: 'GPACtrl'
            });
    });
