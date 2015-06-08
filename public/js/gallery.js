$(document).ready( function() {

  carouselHeight();

  rolloverText();

  fadeOutImages();
  fadeInImages();

  setArrowPosition();

  $(window).resize(function( event ) {
    calcWindowWidth();
  });

});

function calcWindowWidth() {
  return $(window).width();
};

// function loadCarouselImages(selector) {
//   var imagesJson = {
//     "generation-entrepreneur" : {
//       "@1x" : ["10-marketing-with-etiquette.jpg","02_shifting_gender_norms.png", "04-embracing-extremes.jpg"],
//       "@2x" : ["10-marketing-with-etiquette.jpg","02_shifting_gender_norms.png", "04-embracing-extremes.jpg"],
//     },
//     "shifting-gender-norms" : {
//       "@1x" : ["08-privacy-tightrope.jpg", "09-creative-communicators.png"],
//       "@2x" : ["08-privacy-tightrope.jpg", "09-creative-communicators.png"]
//   }
//
//   var imageArray = imagesJson[selector]
//
//   var content = "";
//
//   for(var i=0; i<imageArray.length; i++) {
//     var activeImage = imageArray[0]
//     var image = imageArray[i];
//     content += "<div class='item'>" +
//               "<img src='images/" + image + "' alt='Chania' width='460' height='345'>" +
//               "</div>";
//     $(".carousel-inner").html(content);
//     $(".carousel-inner .item").first().attr('class', 'item active');
//   };
// };

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
    if (calcWindowWidth() >= 650) {
      // loadCarouselImages($(this).attr('rel'));
      $(".grid").css({background:"transparent"});
      $(".grid").css("pointer-events","none");
      var selected = this;
      $(function() {
        $('.grid div').sort(function(){
          return Math.random()*10 > 5 ? 1 : -1;
          }).not(selected).each(function(i) {
            console.log(i);
          $(this).delay((i++) * 15).fadeOut(200);
        });
      });
      $(".cross").fadeIn(1000);
    };
  });
};

function fadeInImages() {
  $(".cross").click(function() {
    // loadCarouselImages($(this).attr('rel'));
    $(".grid").css("pointer-events","auto");
    $(".grid").css({background:"#fac421"});
    $(function() {
      // $('.grid div').fadeIn("slow");
      $('.grid div').sort(function(){
        return Math.random()*10 > 5 ? 1 : -1;
      }).each(function(i) {
        $(".grid-item").delay((i++) * 15).fadeIn(1000);
      });
    });
    $(".cross").fadeOut(1000);
  });
};

function rolloverText() {
  $('.image-rollover .content').each(function() {
      $(this).css('margin-top', $(this).parent().height()-$(this).height());
  });
};
