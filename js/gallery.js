var gallery = new Gallery();

function setCarouselHeight() {
  var carouselHeight = $("#image-gallery.container").height();
  $(".carousel-inner").css("height", carouselHeight);
  $(".carousel-inner > .item").css("height", carouselHeight);
};

function setRolloverText() {
  $(".image-rollover").each(function() {
    var containerHeight = $(this).height();
    var textHeight = $(this).find(".content").height();
    var padding = (containerHeight/2) - (textHeight/2);
    $(this).find(".content").css("padding-top", padding);
  });
}

function setArrowPosition() {
  var containerHeight = $(".carousel-inner").height();
  var arrowHeight = $('img.left-arrow').height();
  var padding = (containerHeight/2) - (arrowHeight/2);
  $('.carousel-control').css("padding-top", padding);
};

function fadeOutImages() {
  $('.grid > div').sort(function(){
    return Math.random()*10 > 5 ? 1 : -1;
  }).each(function(i) {
    $(this).not($("#image12")).delay((i++) * 100).fadeTo(200, 0, function() {
      $(this).css("visibility", "hidden");
    });
    $("#image12").css("display","none");

  });
};

function fadeInImages() {
  $('.grid > div').sort(function(){
    return Math.random()*10 > 5 ? 1 : -1;
  }).each(function(i) {
    $(this).not($("#image12")).delay((i++) * 50).fadeTo(50, 0, function(){
      $(this).css({"opacity": 1, "visibility": "visible"});
    });
    if( $(window).width() < 430 ){
      $("#image12").css("display","inline");
    };
  });
};

function setDescriptionPosition() {
  var descriptiondDivWidth = $(".image-info.description").width();
  var bioDivWidth = $(".image-info.bio").width();
  var windowWidth = $(window).width();
  $(".image-info.description").css( "left", windowWidth/2 - descriptiondDivWidth/2 );
  $(".image-info.bio").css( "left", windowWidth/2 - bioDivWidth/2 );
};

$(document).ready(function() {

  $(window).resize(function() {
    setArrowPosition();
    setCarouselHeight();
    setDescriptionPosition();
    setRolloverText();
    setDescriptionPosition();
  });

  setRolloverText();

  $(".grid-item").click(function() {
    var selectedImage = $(this);
    var imageSelector = $(this).attr('rel');

    fadeOutImages()

    gallery.loadImagesIntoCarousel(imageSelector);

    gallery.loadTextIntoCarousel(imageSelector, selectedImage);

    setCarouselHeight();

    setArrowPosition();

    setDescriptionPosition();
  });

  $(".cross").click(function() {
    fadeInImages();
    gallery.resetCarousel();
  });

  $('.carousel-control.right').click(function() {
    gallery.clickRightArrow();
  });

  $('.carousel-control.left').click(function() {
    gallery.clickLeftArrow();
  });

});
