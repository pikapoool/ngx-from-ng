import * as angular from "angular";
import { ParseStringService } from "common/services/parse-string.service";

import { moduleApp } from './../indexDeclaration';

moduleApp.config(function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        controller: 'homeController',
        template: require('./home.html'),
    });
}).controller('homeController', function homeController(
    $scope,
    $parseDecimal,
    $ParseStringService: ParseStringService,
) {
    $scope.numb = $parseDecimal.toDecimal("45,500");
    $scope.name = $ParseStringService.toUpperCase("ngx service");
});
