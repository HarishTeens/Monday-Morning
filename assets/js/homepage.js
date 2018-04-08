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
function checkstick(){
	console.log('happened');
	var hT = $('#gotcha').offset().top,
       hH = $('#gotcha').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
       console.log(hT);
       console.log(hH);
       console.log(wH); 
       console.log(wS);
   if (wS > hT){	
   		console.log('add');
      	$('#nav2').addClass('getstuck');
      	$('#bs-example-navbar-collapse-2,#search').addClass('getstuck1');
        $('#stickynavbar,#search').css('margin','5px ');
        $('#search').addClass('floaty');
        $('#bs-example-navbar-collapse-2').addClass('margin-out-in');
   }
   else{
   		$('#nav2').removeClass('getstuck');
   		$('#bs-example-navbar-collapse-2,#search').removeClass('getstuck1');
   		$('#stickynavbar,#search').css('margin','25px 0px');
      $('#bs-example-navbar-collapse-2').removeClass('margin-out-in');
      $('#search').removeClass('floaty');
   	   }
}
var scrollTimeout = null;
$(window).scroll(function(){
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function(){checkstick()},1);
});

