import * as angular from "angular";

import { moduleApp } from '../indexDeclaration';

moduleApp.config(function config($stateProvider) {
    $stateProvider.state('ngx-in-ng1', {
        url: '/ngx-in-ng1',
        controller: 'ngxInNg1Controller',
        template: require('./ngx-in-ng1.html'),
    });
}).controller('ngxInNg1Controller', function homeController(
    $scope,
    $state,
) {
    $scope.role = "ADMIN";

    $scope.goToAddUrl = function () {
        $state.go("home");
    };
});
