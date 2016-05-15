(function(){
	'use strict';

    var ctx;

	function onDocumentReady(){
	    ctx = new window.AudioContext();
	}

	document.addEventListener('DOMContentLoaded', onDocumentReady);
})();