'use strict';
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var broccoli = require('broccoli');
var cssnano = require('./');

it('should minify css', function () {
	return (new broccoli.Builder(cssnano('fixture'))).build().then(function (dir) {
		var content = fs.readFileSync(path.join(dir.directory, 'fixture.css'), 'utf8');
		assert.strictEqual(content.trim(), 'body{color:#fff}');
	});
});
