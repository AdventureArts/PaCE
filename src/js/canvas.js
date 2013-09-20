define('canvas', ['jquery', 'crafty', 'support'], function($, Crafty, support) {
	'use strict';

	var isPixelated = false;

	function pixelateCraftyCanvas(doPixelation) {
		//console.log(doPixelation);
		//If browser supports canvas 2d context.imageSmoothingEnabled, set it to the opposite of doPixelation
		if (support._imageSmoothing) Crafty.canvas.context[support._imageSmoothing] = !doPixelation;
	}

	var canvasInit;
	function extendCanvasInit() {
		canvasInit = Crafty.canvas.init;
		Crafty.canvas.init = newCanvasInit;
	}
	function newCanvasInit() {
		canvasInit.apply(this, arguments);
		if (isPixelated) pixelateCraftyCanvas(true);
	}
	extendCanvasInit();

	var craftyStop = Crafty.stop;
	Crafty.stop = function() {
		craftyStop.apply(this, arguments);
		extendCanvasInit();
	};


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
