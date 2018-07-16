$(document).ready(function(){
	var slide1 = $('.slider-img1');
	var slide2 = $('.slider-img2');
	var slide3 = $('.slider-img3');
	var tl = new TimelineMax({repeat:-1});

	tl.to(slide1,1.5,{x:999,zIndex:0,opacity:0,display:"none"},"+=1")
	  .set(slide1,{x:-1345})
	  .to(slide2,1.5,{x:300,zIndex:0},"-=1.5")
	  .to(slide2,1.5,{x:999,zIndex:0,opacity:0,display:"none"},"+=1")
	  .to(slide3,1.5,{x:300,zIndex:1},"-=1.5")
	  .to(slide3,1.5,{x:999,zIndex:0,opacity:0,display:"none"},"+=1")
	  .to(slide1,1.5,{x:300,zIndex:1,opacity:1,display:"block"},"-=1")

	  $('#play').click(function(){
	  		tl.pause();
	  		$(this).html("<i class='fa fa-pause' id='play'></i>")
	  })
	  $('#back').click(function(){
	  		tl.reverse();
	  })
	  $('#forward').click(function(){
	  		tl.resume();
	  })



});



