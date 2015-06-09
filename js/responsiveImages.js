$(document).ready(function() {

	var sidebarWidth = 0;
	var leftOffset = sidebarWidth;
	var $container = $('#image-gallery');
	var background = "#FAC421"

	setColumnWidth();
	$container.isotope({
			itemSelector : '.grid-item',
			resizable : false,
			transformsEnabled : true
	});

	setBackgroundColor();

	function setBackgroundColor() {
		containerHeight = $("#image-gallery").height();
		containerWidth = $("#image-gallery").width();
		$(".grid").css({"width": containerWidth, "height": containerHeight, "background-color": background});
	};


	function getNumColumns(){
		var winWidth = $(window).width();
		var column = 3;
		if(winWidth>=1000) column = 4;
		return column;
	}

	function setColumnWidth(){
		var columns = getNumColumns();
		var containerWidth = $(window).width();
		var postWidth = containerWidth/columns;
		postWidth = Math.floor(postWidth);

    $(".grid-item").each(function(index){
			$(this).css({"width":postWidth+"px"});
		});

	}

	function arrange(){
		setColumnWidth();
		$container.isotope('layout');
	}

	$(window).resize(function( event ) {
    arrange();
	});

	$('a.entry-link').hover( function() {
		$(this).find('.overlay').stop().css({opacity: 0,display: 'block'}).animate({ opacity: 1}, 150);
	}, function() {
		$(this).find('.overlay').stop().fadeOut(150);
	});


});
