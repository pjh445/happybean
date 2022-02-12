$(document).ready(function(){
	
	//동영상 시청이 끝나면 이벤트 발생
	var vid = document.getElementById("myVideo");
	vid.onended =function(){
		alert("동영상을 시청했습니다.\n기부금 500원이 적립됩니다.");
		$("#movie>input").attr("src","images/btn_ok_2.png");
	}
	//희망나누기 : 밥그릇 옮기면 이미지 팝업 나옴
	$("#rice").draggable();
	$("#area2").droppable({
		//drop: function(event, ui){
		drop: function(){
			$("#pop").css("display","block");
			$(".arr").css("opacity",1);
		}
	});	
	//오른쪽 화살표 클릭
	var i = 1;
	$("#arrRight").click(function(){
		if(i <= 3){
			i++;
			var popSrc = "images/pop" + i + ".png";
			$("#pop").attr("src", popSrc);			
		} else {
			alert("마지막입니다.");
		}
		
	});
	//왼쪽 화살표 클릭
	$("#arrLeft").click(function(){
		if(i >= 2){
			i--;
			var popSrc = "images/pop" + i + ".png";
			$("#pop").attr("src", popSrc);
		} else {
			alert("처음입니다.");
		}
	});
	//검정영역 나오기
	$('[src="images/pop1.png"]').click(function(){
		if(i==4) {
			$("#black").fadeIn();
			$("body").css("overflow","hidden");
		}
	});
	//검정영역 없애기
	$("#black> input").click(function(){
		$("#black").fadeOut();
		$("body").css("overflow","auto");
	});
	
});