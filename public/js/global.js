$(document).ready(function(){

  $('#image-container #content').each(function() {
      $(this).css('margin-top', $(this).parent().height()-$(this).height());
  });

  if ($(window).width() > 768) {
    $('#image-container.card6 #content').css('margin-top', 0);
  }

});
