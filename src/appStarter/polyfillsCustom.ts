const www: any = window;

(function (ElementProto) {
	if (typeof ElementProto.matches !== "function") {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			const element = this;
			const elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			let index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== "function") {
		ElementProto.closest = function closest(selector) {
			let element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(www.Element.prototype);

import "mdn-polyfills/Object.assign";
import "mdn-polyfills/Object.create";
import "mdn-polyfills/Array.prototype.find";
//import 'mdn-polyfills/Array.prototype.from';
import "mdn-polyfills/Array.prototype.forEach";
import "mdn-polyfills/Array.prototype.filter";
import "mdn-polyfills/Array.prototype.findIndex";
import "mdn-polyfills/Array.prototype.includes";
import "mdn-polyfills/Array.of";
import "mdn-polyfills/String.prototype.repeat";
import "mdn-polyfills/String.prototype.startsWith";
import "mdn-polyfills/Function.prototype.bind";
//import 'mdn-polyfills/NodeList.forEach';

(function (StringType) {
	if (!StringType.prototype.isDate) {
		StringType.prototype.isDate = function () {
			const currVal = this;
			if (currVal === "")
				return false;

			const rxDatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/; //Declare Regex
			const dtArray = currVal.match(rxDatePattern); // is format OK?

			if (dtArray == null)
				return false;

			//Checks for mm/dd/yyyy format.
			const dtMonth = dtArray[3];
			const dtDay = dtArray[5];
			const dtYear = dtArray[1];

			if (dtMonth < 1 || dtMonth > 12)
				return false;
			else if (dtDay < 1 || dtDay > 31)
				return false;
			else if ((dtMonth === 4 || dtMonth === 6 || dtMonth === 9 || dtMonth === 11) && dtDay === 31)
				return false;
			else if (dtMonth === 2) {
				const isleap = (dtYear % 4 === 0 && (dtYear % 100 !== 0 || dtYear % 400 === 0));
				if (dtDay > 29 || (dtDay === 29 && !isleap))
					return false;
			}
			return true;
		};
	}

	if (!StringType.prototype.format) {
		StringType.prototype.format = function () {
			const args = arguments;
			return this.replace(/{(\d+)}/g, function (match, number) {
				return typeof args[number] !== "undefined"
					? args[number]
					: match
					;
			});
		};
	}

	if (!StringType.prototype.endsWith) {
		StringType.prototype.endsWith = function (searchString, position) {
			const subjectString = this.toString();
			if (position === undefined || position > subjectString.length) {
				position = subjectString.length;
			}
			position -= searchString.length;
			const lastIndex = subjectString.indexOf(searchString, position);
			return lastIndex !== -1 && lastIndex === position;
		};
	}
})(www.String);
