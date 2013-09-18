define('canvas', ['jquery', 'crafty', 'pace'], function($, Crafty, pace) {
	'use strict';

	if (pace._imageSmoothing) {
		describe('pixelateCanvas imageSmoothing', function() {

			var ctx;
			beforeEach(function() {
				Crafty.init();
				Crafty.canvas.init();
				ctx = Crafty.canvas.context;
			});
			afterEach(function() {
				pace.pixelateCanvas(false);
				Crafty.stop(true);
			});

			it('pixelateCanvas(true) should turn off imageSmoothing', function() {
				pace.pixelateCanvas(true);
				expect(pace._pixelated).toBe(true);
				expect(ctx[pace._imageSmoothing]).toBe(false);
			});
			it('pixelateCanvas(false) should re-enable imageSmoothing', function() {
				pace.pixelateCanvas(true);
				pace.pixelateCanvas(false);
				expect(pace._pixelated).toBe(false);
				expect(ctx[pace._imageSmoothing]).toBe(true);
			});
			it('pixelateCanvas() with no args should turn off imageSmoothing', function() {
				pace.pixelateCanvas();
				expect(pace._pixelated).toBe(true);
				expect(ctx[pace._imageSmoothing]).toBe(false);
			});
		});
	}

	describe('pixelateCanvas stage pixelated class', function() {
		beforeEach(function() {
			Crafty.init();
		});
		afterEach(function() {
			pace.pixelateCanvas(false);
			Crafty.stop(true);
		});

		it('pixelateCanvas(true) should add pixelated class to stage', function() {
			pace.pixelateCanvas(true);
			expect($(Crafty.stage.elem).hasClass('pixelated')).toBe(true);
		});
		it('pixelateCanvas(false) should remove pixelated class from stage', function() {
			pace.pixelateCanvas(true);
			pace.pixelateCanvas(false);
			expect($(Crafty.stage.elem).hasClass('pixelated')).toBe(false);
		});
		it('pixelateCanvas() with no args should add pixelated class to stage', function() {
			pace.pixelateCanvas();
			expect($(Crafty.stage.elem).hasClass('pixelated')).toBe(true);
		});
	});
});
