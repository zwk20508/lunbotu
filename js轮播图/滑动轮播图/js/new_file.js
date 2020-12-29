$(function(){
	var tuWidth=$('#tu>li').width();
	
	var index=0;
	var move=null;
	move=function(){
		$('#tu').animate({'left':-tuWidth*index},1000);
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
	
	$('#shu>li').click(function(){
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