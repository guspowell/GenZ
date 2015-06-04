$(document).ready(function(){

  positionCardText();

  if ($(window).width() > 768) {
    $('#card6').css('margin-top', 0);
  };

  if ($(window).width() < 768) {
    $('#card9').css('color', 'white');
  };

  if($(window).height() > 620 ) { setTitleContainerHeight(); }

  // if ($(window).width() > 768) {
  //   skrollr.init();
  // };

  $(window).resize(function( event ) {
    if($(window).height() > 620 ) { setTitleContainerHeight(); }
    positionCardText();
  });

});

function setTitleContainerHeight() {
  var windowHeight = window.innerHeight;
  var navbarHeight = 50;
  var paddingHeight = parseInt( $(".yellow.container").css('padding-top').replace("px", "") );
  var buttonHeight = $("btn.read-report").outerHeight();
  var setHeight = windowHeight - navbarHeight - paddingHeight*2 - buttonHeight;
  $('#title-container').css("height", setHeight);
};

function positionCardText() {
  $('.image-container').each(function() {
      $(this).css('padding-top', $(this).parent().height()-$(this).height());
  });
};
