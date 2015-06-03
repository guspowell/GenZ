$(document).ready(function(){

  positionCardText();

  if ($(window).width() > 768) {
    $('#image-container.card6 #content').css('margin-top', 0);
  };

  if ($(window).width() < 768) {
    $('#image-container.card9').css('color', 'white');
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
  var height = "height:" + (windowHeight - navbarHeight - 88) + "px;";
  document.getElementById('title-container').setAttribute('style', height)
};

function positionCardText() {
  $('#image-container #content').each(function() {
      $(this).css('margin-top', $(this).parent().height()-$(this).height());
  });
};
