$(document).ready(function(){
	/*섹션2*/
	/*섹션2-1*/
	$("#sec21Click").click(function(){
		var x = $(this).attr("src");
		var y = x.replace("k1","k2");
		//alert(y);
		$(this).attr("src",y);
		var z1 = $("#slide1 .arrRight").attr("src");
		var z2 = z1.replace("gray","orange");
		//alert(z2);
		$("#slide1 .arrRight").attr({
			"disabled": false,
			"src" : z2
		});
	});
	//섹션 2-2	
	$("#sec22Click").click(function(){
		var x = $(this).attr("src");
		var y = x.replace("k1","k2");
		$(this).attr("src",y);
		var z1 = $("#slide1 .arrRight").attr("src");
		var z2 = z1.replace("gray","orange");
		$("#slide2 .arrRight").attr({
			"disabled": false,
			"src" : z2
		}); 
	});
	//섹션 2-3	
	$("#sec23Click").click(function(){
		var x = $(this).attr("src");
		var y = x.replace("k1","k2");
		$(this).attr("src",y);
		var z1 = $("#slide1 .arrRight").attr("src");
		var z2 = z1.replace("gray","orange");
		$("#slide3 .arrRight").attr({
			"disabled": false,
			"src" : z2
		}); 
		var b1 = $("#ok_bean").attr("src");		
		var b2 = b1.replace("gray","orange");
		$("#ok_bean").attr("src", b2);
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
	
});