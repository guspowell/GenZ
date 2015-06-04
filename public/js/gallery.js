$(document).ready( function() {

  carouselHeight();

  fadeOutImages();

  setArrowPosition();

  // $(window).resize(function( event ) {
  //   if (isInSlideMode === false) { carouselHeight(); }
  // });

});

function loadCarouselImages(selector) {
  var imagesJson = {
    "generation-entrepreneur" : ["10-marketing-with-etiquette.jpg","02_shifting_gender_norms.png", "04-embracing-extremes.jpg"],
    "shifting-gender-norms" : ["08-privacy-tightrope.jpg", "09-creative-communicators.png"]
  }
  var imageArray = imagesJson[selector]

  var content = "";

  for(var i=0; i<imageArray.length; i++) {
    var activeImage = imageArray[0]
    var image = imageArray[i];
    content += "<div class='item'>" +
              "<img src='images/" + image + "' alt='Chania' width='460' height='345'>" +
              "</div>";
    $(".carousel-inner").html(content);
    $(".carousel-inner .item").first().attr('class', 'item active');
  };
};

function carouselHeight() {
  var height = $("#image-gallery").height();
  $("#carousel, .carousel-inner").css("height", height);
  return height;
};

function setArrowPosition() {
  var containerHeight = $(".carousel-inner").height();
  var arrowHeight = $('img.left-arrow').height();
  var padding = (containerHeight/2) - (arrowHeight/2);
  $('.carousel-control').css("padding-top", padding);
};

function fadeOutImages() {
  $(".grid-item").click(function() {
    loadCarouselImages($(this).attr('rel'));
    $(".grid").css({background:"transparent"});
    $(".grid").css("pointer-events","none");
    var selected = this;
    $(function() {
      $('.grid div').sort(function(){
        return Math.random()*10 > 5 ? 1 : -1;
      }).not(selected).each(function(i) {
        $(this).delay((i++) * 100).fadeOut(200);
      });
    });
  });
};
