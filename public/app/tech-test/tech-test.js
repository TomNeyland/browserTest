/**
 * Created by skessler on 6/3/15.
 */

console.log("Function has not yet run!");

var testApp = angular.module('testApp', ['ui.router', 'ngCsv', 'ngSanitize']);

testApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/techTest');

    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('techTest', {
            url: '/techTest',
            templateUrl: ('public/app/tech-test/tech-test.html'),
            controller: 'fetchAssetsCtrl',
            controllerAs: 'fetchAssets'
        })

        .state('liveSessionTest', {
            url: '/liveSessionTest',
            templateUrl: ('public/app/live-session-test/live-session-test.html'),
        });
}]);

testApp.controller('fetchAssetsCtrl', function fetchAssetsCtrl($scope, $http) {
    console.log("this is running");

    this.runTest = function () {
        this.assetUrls = [
            'https://d1cqkmkxyobhx.cloudfront.net/assets/js_libs/addlive/addlive-ui-sdk.js',
            'http://d0.awsstatic.com/product-marketing/S3/S3_Sketch_Durable.png',
            'http://www.surveygizmo.com/collab/2174898/test',
            'http://corp.kaltura.com/',
            'http://www.realappeal.com/',
            'http://healthfleet.com/',
            'http://www.zillion.com/'
        ];

        this.assetResponses = [];
        this.assetUrls.map(function (url) {
            this.get(url).then(function (response) {
                this.assetResponses.push(response);
            }.bind(this));
        }.bind(this));
    };
});


