$(document).ready(function(){
	$(window).bind('scroll',function(e){
    	parallaxScroll();
	});
 
	function parallaxScroll(){
    	var scrolled = $(window).scrollTop();
    	$('.bird1').css('left',(90+(scrolled*.25))+'px');
    	}
});