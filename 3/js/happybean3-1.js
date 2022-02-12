$(document).ready(function(){
	//////////////////////////////////////////
	/*섹션2*/
	function test($click){
		var x = $click.attr("src");
		var y = x.replace("k1","k2");
		$click.attr("src",y);
		var z1 = $("#slide1 .arrRight").attr("src");
		var z2 = z1.replace("gray","orange");
		var $slide = $click.parent().parent().parent();
		var $right = $slide.find(".arrRight");
		$right.attr({
			"disabled": false,	
			"src" : z2
		});
	}
	
	/*섹션2-1*/
	$("#sec21Click").click(function(){
		var $click = $("#sec21Click");		
		test($click);	
	});
	//섹션 2-2	
	$("#sec22Click").click(function(){
		var $click = $("#sec22Click");
		test($click);
	});
	//섹션 2-3	
	$("#sec23Click").click(function(){
		var $click = $("#sec23Click");
		test($click);
		//확인했어요 콩받기
		var b1 = $("#ok_bean").attr("src");		
		var b2 = b1.replace("gray","orange");
		$("#ok_bean").attr({
			"src": b2,
			"disabled": false
		});
	});
		
	/*오른쪽방향 화살표*/
	$(".arrRight").click(function(){
		if($(window).width()>= 1024){
			$("#slideArea").stop().animate({left: "-=880px"});
		} else {
			$("#slideArea").stop().animate({left: "-=100vw"});
		}
	});
	/*왼쪽방향 화살표*/
	$(".arrLeft").click(function(){
		if($(window).width()>= 1024){
			$("#slideArea").stop().animate({left: "+=880px"});
		} else {
			$("#slideArea").stop().animate({left: "+=100vw"});
		}
	});
	// 콩지급 확인버튼
	$("#ok_bean").click(function(){
		$("#black").fadeIn();
		$("body").css("overflow","hidden");
	});
	$("#black> input").click(function(){
		$("#black").fadeOut();
		$("body").css("overflow","auto");
	});
	//////////////////////////////////////////
	//섹션 3
	$("#sec31> .blinkArrow").click(function(){
		$(this).addClass("vegetable").attr("src","images/sec3-vegetable.png");
		$("#sec31").children("input").fadeOut(800, function(){
			$("#sec32> input").removeClass("hide");
		});
	});
	$("#sec32> .blinkArrow").click(function(){
		$(this).addClass("vegetable").attr("src","images/sec3-vegetable.png");
		$("#sec32> img").attr("src", "images/sec3-2.png");
		$("#sec32").children("input").fadeOut(800, function(){
			$("#sec33> input").removeClass("hide");
		});
	});
	$("#sec33> .blinkArrow").click(function(){
		$(this).addClass("vegetable").attr("src","images/sec3-vegetable.png");
		$("#sec33> img").attr("src", "images/sec3-3.png");
		$("#sec33").children("input").fadeOut(800, function(){
			$("#sec33> input").removeClass("hide");
			$("#sec34> img").attr("src","images/sec3-4.png");
			$("#black").fadeIn();
			$("body").css("overflow","hidden");			
		});
		$("#black> input").attr("src","images/pop3.png");
	});
	
});


