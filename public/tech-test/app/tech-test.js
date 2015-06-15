var fetchAssets = angular.module('fetchAssets', ['ui.router', 'ngCsv', 'ngSanitize']);

function fetchAssetsCtrl($http) {
    this.assets = [{
        url: 'http://d0.awsstatic.com/product-marketing/S3/S3_Sketch_Durable.png',
        name: 'Images',
        method: 'xhr'
    }, {
        url: 'http://use.typekit.net/mme7cvn.js',
        name: 'Fonts',
        method: 'xhr'
    }, {
        url: 'http://sgiz.mobi/s3/5d43d7a866f0',
        name: 'Quiz',
        method: 'xhr'
    }, {
        url: 'http://cdnapi.kaltura.com/html5/html5lib/v2.31.2/mwEmbedFrame.php/p/1846601/uiconf_id/30040881/entry_id/0_bqn6bjbj?wid=_1846601&iframeembed=true&playerId=kaltura_player&entry_id=0_bqn6bjbj',
        name: 'Video',
        method: 'xhr'
    }, {
        url: 'https://cdn.contentful.com/spaces/02o36124tiz8/entries?content_type=4LPFIL0LOo2EGm48SMGQAI&skip=0&limit=3&order=fields.sessionNumber&fields.category=&access_token=13fc5fa73a78b538680928f68d9d8c604382d992ffd1fc29ce9dd3c36b101c5d',
        name: 'Content',
        method: 'xhr'
    }, {
        url: 'http://d1cqkmkxyobhx.cloudfront.net/assets/lib/angularjs/angular.js',
        name: 'Javascript',
        method: 'xhr'
    }];

    this.assetResponses = [];

    this.runTest = function () {
        this.assets.map(function (asset) {
            if (this.assets.method === 'xhr') {
                $http.get(asset.url).then(function (response) {
                    asset.response = response;
                    this.assetResponses.push(asset);
                    console.log(response);
                }.bind(this));
            } else if (this.assets.method === 'iframe') {
            }
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
            templateUrl: ('public/tech-test/app/tech-test.html'),
            controller: 'fetchAssetsCtrl',
            controllerAs: 'FetchAssets'
        })

        .state('liveSessionTest', {
            url: '/liveSessionTest',
            templateUrl: ('public/app/live-session-test/live-session-test.html')
        });
}]);

