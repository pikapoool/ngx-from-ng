import * as angular from "angular";

import { moduleServices } from "./services/indexDeclaration";
import { moduleDirectives } from "./directives/indexDeclaration";

export const moduleCommon = angular.module("myApp.common", [
    moduleServices.name,
    moduleDirectives.name,
]);