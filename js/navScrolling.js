$(document).ready(function() {

  navbarHeight = 50;

  $("img.down-arrow.first").click(function() {
    $('html, body').animate({
      scrollTop: $("#yellow-section-1").offset().top
    }, 1000);
  });

  $("#meet-the-participants").click(function() {
    var navbarHeight = 50;
    $('html, body').animate({
      scrollTop: $("#image-gallery").offset().top - navbarHeight
    }, 1000);
  });

  $("#what-we-learned").click(function() {
    var navbarHeight = 50;
    $('html, body').animate({
      scrollTop: $("#card1").offset().top - navbarHeight
    }, 1000);
  });

  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  var up = false;
  var newscroll;
  mywindow.scroll(function () {
      newscroll = mywindow.scrollTop();
      if (newscroll > mypos && !up) {
          $('.navbar').stop().fadeOut(200);
          up = !up;
          console.log(up);
      } else if(newscroll < mypos && up) {
          $('.navbar').stop().fadeIn(200);
          up = !up;
      }
      mypos = newscroll;
  });

});
