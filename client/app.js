// Client side angular app!
'use strict';


angular.module('stdComponents', []);

angular.module('appModule', ['stdComponents', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/404');

        $locationProvider.html5Mode(true);
    });  