'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

var routerDemo = angular.module('tech-demo', ['ui.router']);

routerDemo.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tech-test');
    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('tech-test', {
            url: '/tech-test',
            template: require('./tech-test/_tech-test.html')
        });
}]);

export default routerDemo;
