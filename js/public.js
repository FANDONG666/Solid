$('.list').hover(function(){
	$(this).css("background","#0b3c7b");
},function(){
	$(this).css("background","");
})
$('.jic-pagination span').click(function(){
	$('.jic-pagination span').removeClass('addBlue');
	$(this).addClass('addBlue');
	var index = $('.jic-pagination span').index(this);
	$('.jic-ul').hide();
	$('.jic-ul').eq(index).show();
})
$('.npt-pagination span').click(function(){
	$('.npt-pagination span').removeClass('addBlue');
	$(this).addClass('addBlue');
	var index = $('.npt-pagination span').index(this);
	$('.npt-ul').hide();
	$('.npt-ul').eq(index).show();
})
$('.bsp-pagination span').click(function(){
	$('.bsp-pagination span').removeClass('addBlue');
	$(this).addClass('addBlue');
	var index = $('.bsp-pagination span').index(this);
	$('.bsp-ul').hide();
	$('.bsp-ul').eq(index).show();
})
$('.ma-pagination span').click(function(){
	$('.ma-pagination span').removeClass('addBlue');
	$(this).addClass('addBlue');
	var index = $('.ma-pagination span').index(this);
	$('.ma-ul').hide();
	$('.ma-ul').eq(index).show();
})

$('.pro-pagination span').click(function(){
	$('.pro-pagination span').removeClass('addBlue');
	$(this).addClass('addBlue');
	var spanVal = $(this).html();
	$('.pro-ul').hide();
	$('.pro-ul').eq(spanVal-1).show();
	
})
$('#pagesNext').click(function(){
	var b = $('.pro-pagination span.addBlue').html();
	var c =parseInt(b)
	$('.pro-ul').hide();
	$('.pro-ul').eq(c).show();
	$('.pro-pagination span').removeClass('addBlue');
	$('.pro-pagination span').eq(c).addClass('addBlue');
})

$('.pagesGo button').click(function(){
	var a =$('.pages-num').val();
	console.log(a);
	$('.pro-ul').hide();
	$('.pro-ul').eq(a-1).show();
})