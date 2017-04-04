$(function() {
	var H = $("header").height();
	
	
	$(window).scroll(function() {
		var docSccrollTop = $(document).scrollTop();
		if(docSccrollTop > H) {

			$("nav").css({
				"display": "block",
				"position": "fixed",
				"top": 0,
				
			})
		} else {

			$("nav").css({ "display": "none" })
			
		}
	});
});