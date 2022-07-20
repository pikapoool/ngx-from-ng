import * as angular from "angular";

import { moduleCommon } from "./../common/indexDeclaration";
import { downgradeModule } from "@angular/upgrade/static";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { StaticProvider } from "@angular/core";

import { AppModule } from "../appStarter/appModule";

const bootstrapFn = (extraProviders: StaticProvider[]) => {
    const platformRef = platformBrowserDynamic(extraProviders);
    return platformRef.bootstrapModule(AppModule);
};

const downgradedModule = downgradeModule(bootstrapFn);

const dependenciesModule = [
    "ui.router",

    moduleCommon.name,
    downgradedModule,
];

export const moduleApp = angular.module("myApp", dependenciesModule);