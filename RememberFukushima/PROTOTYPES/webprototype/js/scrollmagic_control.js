§(document).ready(function(§){
	//build tween
	var tween = TweenMax.staggerFromTo(".bird1", 2, {left: 100}, {left: 0, ease: Back.easeOut}, 0.8}

	//build scene
	var scene = new ScrollScene({duration: 500})
				.setTween(tween)
				.addTo(controller);

				//add indicators (requires debub extension)
				//scene.addIndicators();
});
