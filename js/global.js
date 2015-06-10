$(document).ready(function(){

  positionCardText();

  if ($(window).width() < 768) {
    $('#image-container.card9').css('color', 'white');
  };

  // if($(window).height() > 620 ) { setTitleContainerHeight(); }

  setTitleContainerHeight();

  $(window).resize(function( event ) {
    if($(window).height() > 620 ) { setTitleContainerHeight(); }
    positionCardText();
  });

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


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
  $('.contentPNG').each(function() {
      $(this).css('margin-top', ( $(this).parent().height()/2 ) - ( $(this).find('.statement img').height()/2 ));
  });
};
