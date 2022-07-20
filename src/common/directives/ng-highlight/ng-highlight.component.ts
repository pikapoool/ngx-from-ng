import * as angular from "angular";

import { moduleDirectives } from "../indexDeclaration";

moduleDirectives.directive('ngHighlight', function () {
    return {
        restrict: "E",
        template: require("./ng-highlight.html"),
    }
});
