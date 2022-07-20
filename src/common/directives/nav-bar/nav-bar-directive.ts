import * as angular from "angular";
import { moduleDirectives } from "../indexDeclaration";

moduleDirectives.directive("navBar", function ($timeout) {
    return {
        restrict: "E",
        template: require("./nav-bar.html"),
        replace: true,
        scope: {

        }
    };
});