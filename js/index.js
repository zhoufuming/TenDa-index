$(function(){
	$(".nav-product").on({
		"mouseenter":function(){
			$(this).find("div:eq(0)").stop().slideDown();
		},
		"mouseleave":function(){
			$(this).find("div:eq(0)").stop().slideUp();
		}
	});
});

$(function(){
	var Top = 0;
	var gotop = $("#gotop");
	var show_offset = $(".glyphicon-chevron-left").offset().top;
	$(window).scroll(function(){
		Top = $(document).scrollTop();
		Top > show_offset ? gotop.stop().fadeIn() : gotop.stop().fadeOut();
	});
	gotop.on({
		"click":function(){
			$("html,body").animate({
	            "scrollTop":0
	        },400);
		}        
	});
});