import "core-js";
import "core-js/shim";
//import 'core-js/es5';
import "core-js/es6";
import "core-js/es7";

import "es6-shim";
import * as PP from "es6-promise";

import "zone.js/dist/zone";

Error.stackTraceLimit = Infinity;
import "zone.js/dist/long-stack-trace-zone";

// RxJS
import "rxjs";

import "./polyfillsCustom";

PP.polyfill();
