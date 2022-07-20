import * as angular from "angular";
import { moduleApp } from "./indexDeclaration";

class myAppConfig {
    constructor(
        $logProvider,
        $locationProvider,
        $urlRouterProvider,
        $stateProvider,
    ) {
        $logProvider.debugEnabled(true);
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/home");
        $urlRouterProvider.when('/', ['$state', '$match', ($state, $match) => {
            $state.go('home');
        }]);
    }
}

class myAppCtrl {
  constructor() {
  }
}

moduleApp.config(myAppConfig);
moduleApp.controller("myAppCtrl", myAppCtrl);
