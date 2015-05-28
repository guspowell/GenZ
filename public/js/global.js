$(document).ready(function(){

  $('#image-container #content').each(function() {
      $(this).css('margin-top', $(this).parent().height()-$(this).height())
  });

});
