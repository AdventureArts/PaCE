define('canvas', ['jquery', 'crafty', 'pace'], function($, Crafty, pace) {
	describe('Canvas', function() {

		var ctx;
		beforeEach(function() {
			Crafty.init();
			Crafty.canvas.init();
			ctx = Crafty.canvas.context;
		});
		afterEach(function() {
			Crafty.stop(true);
		});

		if (pace._imageSmoothing) {
			it('pixelateCanvas(true) should turn off imageSmoothing', function() {
				pace.pixelateCanvas(true);
				expect(pace._pixelated).toBe(true);
				expect($(Crafty.stage.elem).hasClass('pixelated')).toBe(true);
				expect(ctx[pace._imageSmoothing]).toBe(false);
			});
			it('pixelateCanvas(false) should re-enable imageSmoothing', function() {
				pace.pixelateCanvas(true);
				pace.pixelateCanvas(false);
				expect(pace._pixelated).toBe(false);
				expect($(Crafty.stage.elem).hasClass('pixelated')).toBe(false);
				expect(ctx[pace._imageSmoothing]).toBe(true);
			});
			it('pixelateCanvas() with no args should default to true', function() {
				pace.pixelateCanvas();
				expect(pace._pixelated).toBe(true);
				expect($(Crafty.stage.elem).hasClass('pixelated')).toBe(true);
				expect(ctx[pace._imageSmoothing]).toBe(false);
			});
		}
	});
});
