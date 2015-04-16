'use strict';
var Filter = require('broccoli-filter');
var cssnano = require('cssnano');

function CssnanoFilter(inputTree, options) {
	if (!(this instanceof CssnanoFilter)) {
		return new CssnanoFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

CssnanoFilter.prototype = Object.create(Filter.prototype);
CssnanoFilter.prototype.constructor = CssnanoFilter;

CssnanoFilter.prototype.extensions = ['css'];
CssnanoFilter.prototype.targetExtension = 'css';

CssnanoFilter.prototype.processString = function (str) {
	return cssnano(str, this.options);
};

module.exports = CssnanoFilter;
