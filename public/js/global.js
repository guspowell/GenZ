$(document).ready(function(){

  positionCardText();

  // if ($(window).width() > 768) {
  //   $('#image-container.card6 #content').css('margin-top', 0);
  // };

  if ($(window).width() < 768) {
    $('#image-container.card9').css('color', 'white');
  };

  if($(window).height() > 620 ) { setTitleContainerHeight(); }

  $(window).resize(function( event ) {
    if($(window).height() > 620 ) { setTitleContainerHeight(); }
    positionCardText();
  });

});

function setTitleContainerHeight() {
  var windowHeight = window.innerHeight;
  var navbarHeight = 50;
  var paddingHeight = parseInt( $("#yellow-section-1").css('padding-top').replace("px", "") );
  var buttonHeight = $("btn.read-report").outerHeight();
  var setHeight = windowHeight - navbarHeight - paddingHeight*2 - buttonHeight;
  $('#title-container').css("height", setHeight);
};

function positionCardText() {
  $('.image-container .content').each(function() {
      $(this).css('margin-top', $(this).parents('.image-container').height()-$(this).height());
  });
  $('.image-container .contentPNG').each(function() {
      $(this).css('margin-top', ( $(this).parents('.image-container').height()/2 ) - ( $(this).height()/2 ));
  });
};
