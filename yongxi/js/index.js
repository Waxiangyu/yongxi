



new WOW().init();



$(function(){
	
	$("div.yanjiu_body .yanjiu_left li").hover(function(){
		
		
		$(this).find("span").css({"display":"inline-block"}).addClass("wow animated bounceInDown").attr("data-wow-duration","5s");
		
	},function(){
		
		$(this).find("span").removeClass("wow animated bounceInDown").css({"display":"none"});
	})
	
	
})
