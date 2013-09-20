define('canvas', ['jquery', 'support'], function($, support) {
	'use strict';

	var isPixelated = false;

	function pixelateCraftyCanvas(doPixelation) {
		//If browser supports canvas 2d context.imageSmoothingEnabled, set it to the opposite of doPixelation
		if (support._imageSmoothing) Crafty.canvas.context[support._imageSmoothing] = !doPixelation;
	}

	return {
		pixelate: function(doPixelation) {
			doPixelation = arguments.length ? !!doPixelation : true;
			if (doPixelation !== isPixelated) {
				isPixelated = doPixelation;

				$(document.body)[(doPixelation ? 'add' : 'remove') + 'Class']('pace-pixelated');

				//check if Crafty.canvas has been initialized
				if (Crafty.canvas.context) {
					pixelateCraftyCanvas(doPixelation);
				}
			}
		},
		getPixelated: function() {
			return isPixelated;
		}
	};
});
