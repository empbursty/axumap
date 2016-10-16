define(["map"], function() {
	function init() {

		var map = new ymaps.Map("map", {
			center : [55.76, 37.64],
			zoom : 7,
			controls : []
		})

    var p = document.querySelector("p");
    var strOptions = p.dataset.options;
    var objOptions = JSON.parse(strOptions);

    var strControls = p.dataset.controls;
    var objControls = JSON.parse(strControls);

    for (var i = 0; i < objControls.length; i++) {
    	map.controls.add(objControls[i], objOptions[i]);
    }
	}

	return {
		initialize : function() {
			ymaps.ready(init)
		}
	}
})