
$(document).ready(function(){
//animate
	$(".anim").click(function(){
		$(".anim-exmpl .box").animate({width: 300}, 3000);
		$(".anim-exmpl .box").animate({height: 200}, 3000);
	});
//show
	$(".shw1").click(function(){
		$(".show-exmpl .box").show();
	});
//show with perameter
	$(".shw2").click(function(){
		$(".show-exmpl .box").show(1000,function(){
			alert("show() method is finished");
		});
	});
//show
	$(".hide1").click(function(){
		$(".hide-exmpl .box").hide();
	})
//toggle
	$(".tgl1").click(function(){
		$(".toggle-exmpl .box").toggle();
	});
//slide up
	$(".s-up").click(function(){
		$(".s-up-exmpl .box").slideUp();
	});
//slide down
	$(".s-down").click(function(){
		$(".s-down-exmpl .box").slideDown();
	});
//slide toggle
	$(".s-toggle").click(function(){
		$(".s-toggle-exmpl .box").slideToggle();
	});
//fade in
	$(".f-in").click(function(){
		$(".f-in-exmpl .box").fadeIn();
	});
//fade in with perameter
	$(".f-in2").click(function(){
		$(".f-in-exmpl .box").fadeIn(2000, function(){
			alert("fadeIn() method is finished");
		});
		});
//fade out
	$(".f-out").click(function(){
		$(".f-out-exmpl .box").fadeOut();
	});
//fade toggle
	$(".f-toggle").click(function(){
		$(".f-toggle-exmpl .box").fadeToggle();
	});
//stop with animate
	$(".anim-st").click(function(){
		$(".anim-stop-exmpl .box").animate({width: 300}, 3000);
		$(".anim-stop-exmpl .box").animate({height: 200}, 3000);
	});
	//stop
	$(".stop").click(function(){
		$(".anim-stop-exmpl .box").stop();
	});
//clearqueue with animate
	$(".anim-qu").click(function(){
		$(".anim-queue-exmpl .box").animate({width: 300}, 3000);
		$(".anim-queue-exmpl .box").animate({height: 200}, 3000);
		$(".anim-queue-exmpl .box").animate({width: 10}, 3000);
		$(".anim-queue-exmpl .box").animate({height: 0}, 3000);


	});
	//clearQueue
	$(".queue").click(function(){
		$(".anim-queue-exmpl .box").clearQueue();
	});

//fade to
	$(".f-to").click(function(){
		$(".f-to-exmpl .box").fadeTo(2000, 0.3);
	});
//mouse enter
	$(".m-enter").mouseenter(function(){
		$(".m-enter-exmpl .box").css({"background": "#8e44ad", "width": 70, "transition": ".9s"});
	});

//mouse enter
	$(".m-enter").mouseleave(function(){
		$(".m-enter-exmpl .box").css({"background": "#d35400", "width": 300, "transition": ".5s"});
	});

//dblclick
$(".dblclick").dblclick(function(){
	$(".dblclick-exmpl .box").hide();
});










});