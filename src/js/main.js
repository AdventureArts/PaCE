define('pace',
	[        'jquery', 'crafty', 'canvas', 'support'],
	function(    $,     Crafty,   canvas,   support) {
	'use strict';
	console.log('pace dev loaded');


	return {
		jQuery: $,
		Crafty: Crafty,
		canvas: canvas,
		support: support
	};
});
