import * as angular from "angular";

import { moduleDirectives } from "../indexDeclaration";

moduleDirectives.directive('ngHighlightAttr', function () {
    return {
        restrict: "A",
        template: "",
        link: function (scope, element, attrs) {
            element.on('mouseenter', function() {
                element.css('background-color', attrs.ngHighlight || 'yellow');
            });
            element.on('mouseleave', function() {
                element.css('background-color', '');
            });
        }
    }
});
