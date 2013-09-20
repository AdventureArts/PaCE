define('test.canvas', ['pace'], function(pace) {
	'use strict';
	var $ = pace.jQuery,
		Crafty = pace.Crafty;

	if (pace.support._imageSmoothing) {
		describe('canvas.pixelate imageSmoothing', function() {

			beforeEach(function() {
				Crafty.init();
				Crafty.canvas.init();
			});
			afterEach(function() {
				pace.canvas.pixelate(false);
				Crafty.stop(true);
			});

			function runExpectations(doPixelation) {
				expect(pace.canvas.getPixelated()).toBe(doPixelation);
				expect(Crafty.canvas.context[pace.support._imageSmoothing]).toBe(!doPixelation);
			}

			it('pixelate(true) should turn off imageSmoothing', function() {
				pace.canvas.pixelate(true);
				runExpectations(true);
			});
			it('pixelate(false) should re-enable imageSmoothing', function() {
				pace.canvas.pixelate(true);
				pace.canvas.pixelate(false);
				runExpectations(false);
			});
			it('pixelate() with no args should turn off imageSmoothing', function() {
				pace.canvas.pixelate();
				runExpectations(true);
			});
		});

		describe('pixelated setting persistency', function() {
			afterEach(function() {
				pace.canvas.pixelate(false);
				Crafty.stop(true);
			});

			function runExpectations(doPixelation) {
				expect(Crafty.canvas.context[pace.support._imageSmoothing]).toBe(!doPixelation);
			}

			it('pixelate(true) should persist after re-instantiating canvas', function() {
				Crafty.init();
				Crafty.canvas.init();
				pace.canvas.pixelate(true);
				Crafty.stop(true);

				Crafty.init();
				Crafty.canvas.init();

				runExpectations(true);
			});
			it('pixelate(true) before canvas.init() should persist', function() {
				pace.canvas.pixelate(true);
				Crafty.init();
				Crafty.canvas.init();

				runExpectations(true);
			});
		});
	}

	describe('canvas.pixelate <body> pace-pixelated class', function() {
		beforeEach(function() {
			Crafty.init();
		});
		afterEach(function() {
			pace.canvas.pixelate(false);
			Crafty.stop(true);
		});

		function runExpectations(doPixelation) {
			expect($(document.body).hasClass('pace-pixelated')).toBe(doPixelation);
		}

		it('pixelate(true) should add pixelated class to body', function() {
			pace.canvas.pixelate(true);
			runExpectations(true);
		});
		it('pixelate(false) should remove pixelated class from body', function() {
			pace.canvas.pixelate(true);
			pace.canvas.pixelate(false);
			runExpectations(false);
		});
		it('pixelate() with no args should add pixelated class to body', function() {
			pace.canvas.pixelate();
			runExpectations(true);
		});
	});
});
