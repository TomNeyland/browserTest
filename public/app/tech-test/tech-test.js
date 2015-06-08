/**
 * Created by skessler on 6/3/15.
 */

console.log("Function has not yet run!");

angular.module('testApp', [])
    .controller('fetchAssets', function fetchAssets($scope, $http) {
        console.log("this is running");
        $scope.assetUrls = [
            'https://d1cqkmkxyobhx.cloudfront.net/assets/js_libs/addlive/addlive-ui-sdk.js',
            'http://d0.awsstatic.com/product-marketing/S3/S3_Sketch_Durable.png',
            'http://www.surveygizmo.com/collab/2174898/test',
            'http://corp.kaltura.com/',
            'http://www.realappeal.com/',
            'http://healthfleet.com/',
            'http://www.zillion.com/'
        ];

        $scope.assetResponses = [];
        $scope.assetUrls.map(function (url) {
            $http.get(url).then(function (response) {
                $scope.assetResponses.push(response);
                console.log("this ran");
            });
        });
    });

console.log("Function did not run");