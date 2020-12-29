$(function(){
	$("#tu>li").eq(0).show();
	
	var index=0;
	var move=null;
	move=function(){
		$("#tu>li").eq(index).fadeIn(500).siblings().fadeOut(500);
		
		$('#shu>li').eq(index).addClass('active').siblings().removeClass('active');
	}
	var timer=null;
	timer=setInterval(function(){
		index++;
		index=index>4?0:index;
		move();
	},2000)
	$('#box').hover(function(){
		clearInterval(timer);
		$('#jt').show();
	},function(){
		timer=setInterval(function(){
			index++;
			index=index>4?0:index;
			move();
		},2000);
		$('#jt').hide();
	})
	$('#shu>li').mouseover(function(){
		index=$(this).index();
		move();
	})
	$('#left').click(function(){
		index--;
		index=index<0?4:index;
		move();
	})
	$('#right').click(function(){
		index++;
		index=index>4?0:index;
		move();
	})
})