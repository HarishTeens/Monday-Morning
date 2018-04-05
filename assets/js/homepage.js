$('#container1>.navbar-default .navbar-nav>li').hover(function () {
	
	if($(window).width()<768)
	{
		console.log('log');
		$('.nothing').toggle();
	
	}
	
})
if($(window).width()<768){
	$('#stickynavbar>li').hover(function(){
		console.log('adfa00');
		$(this).toggleClass('open');	
	})
	
}

