$(document).ready(function(){
	
	/*스크롤하면 따라다니는 퀵배너*/	//console.log($("#quick").position().top)//;상대값//console.log($("#quick").offset().top);//절대값
	var aa = $("#quick").css("top"); //"280px"
	console.log(typeof aa);  //strong (문자)
	var x = parseInt(aa); //"280px" => 280
	console.log(typeof x); //number (숫자)
	$(window).scroll(function(){
		//스크롤바를 내린 높이
		var y = $(window).scrollTop();
		//퀵배너의 높이 + 스크로바 높이
		$("#quick").stop().animate({
			top : x + y + "px"
		});
	});
	
	//지난 이야기
	//오른쪽 반원형 버튼
	$("#arrRight").click(function(){
		var pos = $("#slide").position().left;
		if(pos == 0){
			arr2();
		}
		if(pos == -414 || pos == -768 || pos == -997){
			arr3();
		}if(pos == -828 || pos == -1536 || pos == -1994){
			alert("마지막 페이지입니다.");
		}
	});
	//왼쪽 반원형 버튼
	$("#arrLeft").click(function(){
		var pos = $("#slide").position().left;
		if(pos == 0){
			alert("이전페이지가 없습니다.");
		}
		if(pos == -414 || pos == -768 || pos == -997){
			arr1();
		}if(pos == -828 || pos == -1536 || pos == -1994){
			arr2();
		}
	});
	//둥근사각형버튼
	$("#radiusBtn> input").eq(0).click(function(){
		arr1();
	});
	$("#radiusBtn> input").eq(1).click(function(){
		arr2();
	});
	$("#radiusBtn> input").eq(2).click(function(){
		arr3();
	});
	
	function arr1(){
		$("#slide").stop().animate({left: 0});
		$("#radiusBtn> input").eq(0).attr("src","images/175-2.png");
		$("#radiusBtn> input").eq(1).attr("src","images/182-1.png");
		$("#radiusBtn> input").eq(2).attr("src","images/190-1.png");
		$("#arrLeft").attr("src","images/arr_left_gray.png");
		$("#arrRight").attr("src","images/arr_right_orange.png");
	}
	
	function arr2(){
		if($(window).width()<= 767){
			$("#slide").stop().animate({left: "-414px"});
		}
		if($(window).width()>= 768){
			$("#slide").stop().animate({left: "-768px"});
		}
		if($(window).width()>= 1024){
			$("#slide").stop().animate({left: "-997px"});
		}		
		$("#radiusBtn> input").eq(0).attr("src","images/175-3.png");
		$("#radiusBtn> input").eq(1).attr("src","images/182-2.png");
		$("#radiusBtn> input").eq(2).attr("src","images/190-1.png");
	}
	
	function arr3(){
		if($(window).width()<= 767){
			$("#slide").stop().animate({left: "-828px"});
		}
		if($(window).width()>= 768){
			$("#slide").stop().animate({left: "-1536px"});
		}
		if($(window).width()>= 1024){
			$("#slide").stop().animate({left: "-1994px"});
		}		
		$("#radiusBtn> input").eq(0).attr("src","images/175-3.png");
		$("#radiusBtn> input").eq(1).attr("src","images/182-3.png");
		$("#radiusBtn> input").eq(2).attr("src","images/190-2.png");
		$("#arrLeft").attr("src","images/arr_left_orange.png");
		$("#arrRight").attr("src","images/arr_right_gray.png");
		$("#sec3> button> img").attr("src","images/btn_ok_orange.png");
	}	
});
