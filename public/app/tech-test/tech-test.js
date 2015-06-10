var fetchAssets = angular.module('fetchAssets', ['ui.router', 'ngCsv', 'ngSanitize']);

function fetchAssetsCtrl($http) {
    this.assets = [{
        url: 'http://d0.awsstatic.com/product-marketing/S3/S3_Sketch_Durable.png',
        name: 'Images'
    }, {
        url: 'http://use.typekit.net/mme7cvn.js',
        name: 'Fonts'
    }, {
        url: 'http://www.surveygizmo.com/collab/2174898/test',
        name: 'Survey'
    }, {
        url: 'http://www.kaltura.com/tiny/gysea',
        name: 'Video'
    }, {
        url: 'http://www.contentful.com/',
        name: 'Content'
    }, {
        url: 'http://d1cqkmkxyobhx.cloudfront.net/assets/lib/angularjs/angular.js',
        name: 'Javascript'
    }, {
        url: 'http://www.google-analytics.com/analytics.js',
        name: 'Analytics'
    }, {
        url: 'http://www.realappeal.com/',
        name: 'Real Appeal Domain'
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
                console.log(response);
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

