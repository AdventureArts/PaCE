define('support', function() {
	'use strict';

	var prefixes = 'webkit moz o ms'.split(' ');

	function getPrefixed(obj, prop) {
		if (prop in obj) return prop;

		var capProp = prop[0].toUpperCase() + prop.slice(1);
		for (var i = 0; i < prefixes.length; i++) {
			prop = prefixes[i] + capProp;
			if (prop in obj) return prop;
		}
		return false;
	}

	var helper2d = document.createElement('canvas').getContext('2d');

	return {
		_imageSmoothing: getPrefixed(helper2d, 'imageSmoothingEnabled')
	};
});
