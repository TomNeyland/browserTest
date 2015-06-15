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
        method: 'iframe'
    }];

    this.assetResponses = [];

    this.runTest = function () {
        this.assets.map(function (asset) {
            if (asset.method === 'xhr') {
                $http.get(asset.url).then(function (response) {
                    asset.response = response;
                    this.assetResponses.push(asset);
                    console.log(response);
                }.bind(this))
            } else if (asset.method === 'iframe') {
                console.log('this ran!');
                var importScript = (function (oHead) {
                    function loadError(oError) {
                        throw new URIError("The script " + oError.target.src + " is not accessible.");
                    }

                    return function (sSrc, fOnload) {
                        var oScript = document.createElement("script");
                        oScript.type = "text\/javascript";
                        oScript.onerror = loadError;
                        if (fOnload) {
                            oScript.onload = fOnload;
                        }
                        oHead.appendChild(oScript);
                        oScript.src = sSrc;
                    }
                })(document.head || document.getElementsByTagName("head")[0]);
                console.log('this finished running!');
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
}]);

