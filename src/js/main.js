define('pace', ['jquery', 'crafty'], function($, Crafty) {
	console.log('pace loaded');

	var prefixes = 'webkit moz o ms'.split(' '),
		helper2d = document.createElement('canvas').getContext('2d'),
		imageSmoothing = getPrefixed(helper2d, 'imageSmoothingEnabled');

	helper2d = null;

	function getPrefixed(obj, prop) {
		if (prop in obj) return prop;

		var capProp = prop[0].toUpperCase() + prop.slice(1);
		for (var i = 0; i < prefixes.length; i++) {
			prop = prefixes[i] + capProp;
			if (prop in obj) return prop;
		}
		return false;
	}

	var pace = {
		_imageSmoothing: imageSmoothing,
		_pixelated: false,
		pixelateCanvas: function(doPixelation) {
			doPixelation = arguments.length ? !!doPixelation : true;
			if (doPixelation !== pace._pixelated) {
				pace._pixelated = doPixelation;

				$(Crafty.stage.elem)[(doPixelation ? 'add' : 'remove') + 'Class']('pixelated');
				if (imageSmoothing) Crafty.canvas.context[imageSmoothing] = !doPixelation;
			}
		}
	};
	return pace;
});
