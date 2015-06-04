/**
 * Created by skessler on 6/3/15.
 */

'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

var techTest = angular.module('techDemo', ['ui.router']);

console.log("Function has not yet run!");

function fetchAssets($scope, $http) {
    console.log("this is running");
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
        $http.get(url).then(function (response) {
            this.assetResponses.push(response);
            console.log("this ran");
        });
    });

    console.log("Function did not run");
}

export default techTest;


