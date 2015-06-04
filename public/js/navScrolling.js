$(document).ready(function() {

  navbarHeight = 50;

  $(".read-report").click(function() {
    $('html, body').animate({
      scrollTop: $("#yellow-container").offset().top
    }, 1000);
    $("btn.read-report").fadeOut('slow');
  });

  $("#meet-the-participants").click(function() {
    var navbarHeight = 50;
    $('html, body').animate({
      scrollTop: $("#image-gallery").offset().top - navbarHeight
    }, 1000);
    $("btn.read-report").fadeOut('slow');
  });

  $("#what-we-learned").click(function() {
    var navbarHeight = 50;
    $('html, body').animate({
      scrollTop: $("#slide-1").offset().top - navbarHeight
    }, 1000);
    $("btn.read-report").fadeOut(1500);
  });

  $(window).scroll(function() {
    if ( $(window).scrollTop() < $("#yellow-container").offset().top ) {
      $("btn.read-report").fadeIn(1500);
    };
  });

});