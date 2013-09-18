define('canvas', ['jquery', 'support'], function($, support) {
	'use strict';

	var isPixelated = false;

	return {
		pixelate: function(doPixelation) {
			doPixelation = arguments.length ? !!doPixelation : true;
			if (doPixelation !== isPixelated) {
				isPixelated = doPixelation;

				$(Crafty.stage.elem)[(doPixelation ? 'add' : 'remove') + 'Class']('pixelated');

				var ctx = Crafty.canvas.context;
				//If browser supports canvas imageSmoothing and Crafty.canvas has been initialized
				if (support._imageSmoothing && ctx) ctx[support._imageSmoothing] = !doPixelation;
			}
		},
		getPixelated: function() {
			return isPixelated;
		}
	};
});
