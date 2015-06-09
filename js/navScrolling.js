$(document).ready(function() {

  navbarHeight = 50;

  $(".read-report").click(function() {
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

  // lastScrollTop = 0;
  // $(window).scroll(function(event){
  //    var st = $(this).scrollTop();
  //    if (st > lastScrollTop){
  //      $("btn.read-report").fadeOut(1500);
  //    } else {
  //      $("btn.read-report").fadeIn(1500);
  //    }
  //    lastScrollTop = st;
  // });

});
