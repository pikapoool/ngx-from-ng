import * as angular from "angular";

import { moduleServices } from '../indexDeclaration';

moduleServices.factory('$parseDecimal', function () {

    function toDecimal(value) {
        if (!value) {
            return value;
        }

        var valueWithoutComma = value.toString();
        while (valueWithoutComma.indexOf(',') != -1) {
            valueWithoutComma = valueWithoutComma.toString().replace(',', '');
        }
        return parseFloat(valueWithoutComma);
    }

    function metricToDecimal(value) {
        if (isNaN(value)) {
            value = value.split(' ')[0].trim();
            return toDecimal(value);
        } else {
            return value;
        }

    }

    return {
        toDecimal: toDecimal,
        metricToDecimal: metricToDecimal
    };
});
