$(document).ready(function(){

  $('#image-container #content').each(function() {
      $(this).css('margin-top', $(this).parent().height()-$(this).height());
  });

  if ($(window).width() > 768) {
    $('#image-container.card6 #content').css('margin-top', 0);
  };

  if ($(window).width() < 768) {
    $('#image-container.card9').css('color', 'white');
  };

  setTitleContainerHeight();

  // skrollr.init();

});

function setTitleContainerHeight() {
  var windowHeight = window.innerHeight;
  var navbarHeight = 50;
  var height = "height:" + (windowHeight - navbarHeight - 88) + "px;";
  document.getElementById('title-container').setAttribute('style', height)
};
