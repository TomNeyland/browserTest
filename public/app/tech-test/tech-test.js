var fetchAssets = angular.module('fetchAssets', ['ui.router', 'ngCsv', 'ngSanitize']);

function fetchAssetsCtrl($http) {
    this.assets = [{
        url: 'https://d1cqkmkxyobhx.cloudfront.net/assets/js_libs/addlive/addlive-ui-sdk.js',
        name: 'Cloudfront'
    }, {
        url: 'http://d0.awsstatic.com/product-marketing/S3/S3_Sketch_Durable.png',
        name: 's3'
    }, {
        url: 'http://www.surveygizmo.com/collab/2174898/test',
        name: 'Survey Gizmo'
    }, {
        url: 'http://corp.kaltura.com/',
        name: 'Kaltura'
    }, {
        url: 'http://www.realappeal.com/',
        name: 'Real Appeal Domain'
    }, {
        url: 'http://healthfleet.com/',
        name: 'Health Fleet Domain'
    }, {
        url: 'http://www.zillion.com/',
        name: 'Zillion Domain'
    }];

    this.assetResponses = [];

    this.runTest = function () {

        this.assets.map(function (asset) {
            $http.get(asset.url).then(function (response) {
                asset.response = response;
                this.assetResponses.push(asset);
            }.bind(this));
        }.bind(this));
    };
}

fetchAssets.controller('fetchAssetsCtrl', ['$http', fetchAssetsCtrl]);


fetchAssets.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/techTest');

    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('techTest', {
            url: '/techTest',
            templateUrl: ('public/app/tech-test/tech-test.html'),
            controller: 'fetchAssetsCtrl',
            controllerAs: 'FetchAssets'
        })

        .state('liveSessionTest', {
            url: '/liveSessionTest',
            templateUrl: ('public/app/live-session-test/live-session-test.html')
        });
}]);

