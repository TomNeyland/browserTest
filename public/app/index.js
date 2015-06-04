'use strict';

import angular from 'angular';
import uiBootStrap from 'angular-bootstrap'
import uiRouter from 'angular-ui-router';
import browserTest from './tech-test/browserTest.js'

var techDemo = angular.module('techDemo', ['ui.router']);

techDemo.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tech-test');
    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('tech-test', {
            url: '/tech-test',
            template: require('./tech-test/_tech-test.html'),
            controllerAs: browserTest
        });
}]);

export default techDemo;
