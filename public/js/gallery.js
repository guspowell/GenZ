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

function loadCarouselImages(selector) {
  console.log(selector)
  var imagesJson = {
    "01-ellie" : {
      "@1x" : ["01@1x.jpg","02@1x.jpg", "03@1x.jpg", "04@1x.jpg", "05@1x.jpg"],
      "@2x" : ["01@2x.jpg","02@2x.jpg", "03@2x.jpg", "04@2x.jpg", "05@2x.jpg"],
    },
    "02-bella-and-jo" : {
      "@1x" : ["02-bellajo-01@1x.jpg", "02-bellajo-02@1x.jpg", "02-bellajo-03@1x.jpg", "02-bellajo-04@1x.jpg", "02-bellajo-05@1x.jpg"],
      "@2x" : ["02-bellajo-01@2x.jpg", "02-bellajo-02@2x.jpg", "02-bellajo-03@2x.jpg", "02-bellajo-04@2x.jpg", "02-bellajo-05@2x.jpg"],
    },
    "03-eligh" : {
      "@1x" : ["03-eligh-01@1x.jpg", "03-eligh-02@1x.jpg", "03-eligh-03@1x.jpg", "03-eligh-04@1x.jpg"],
      "@2x" : ["03-eligh-01@2x.jpg", "03-eligh-02@2x.jpg", "03-eligh-03@2x.jpg", "03-eligh-04@2x.jpg"],
    },
    "04-elliot" : {
      "@1x" : ["04-elliot-01@1x.jpg", "04-elliot-02@1x.jpg", "04-elliot-03@1x.jpg", "04-elliot-04@1x.jpg", "04-elliot-05@1x.jpg"],
      "@2x" : ["04-elliot-01@2x.jpg", "04-elliot-02@2x.jpg", "04-elliot-03@2x.jpg", "04-elliot-04@2x.jpg", "04-elliot-05@2x.jpg"],
    },
    "05-alessandra" : {
      "@1x" : ["05-alessandra-01@1x.jpg", "05-alessandra-02@1x.jpg", "05-alessandra-03@1x.jpg", "05-alessandra-04@1x.jpg", "05-alessandra-05@1x.jpg"],
      "@2x" : ["05-alessandra-01@2x.jpg", "05-alessandra-02@2x.jpg", "05-alessandra-03@2x.jpg", "05-alessandra-04@2x.jpg", "05-alessandra-05@2x.jpg"],
    },
    "06-lewis" : {
      "@1x" : ["06-lewis-01@1x.jpg", "06-lewis-02@1x.jpg", "06-lewis-03@1x.jpg", "06-lewis-04@1x.jpg", "06-lewis-05@1x.jpg"],
      "@2x" : ["06-lewis-01@2x.jpg", "06-lewis-02@2x.jpg", "06-lewis-03@2x.jpg", "06-lewis-04@2x.jpg", "06-lewis-05@2x.jpg"],
    },
    "07-simran" : {
      "@1x" : ["07-simran-01@1x.jpg", "07-simran-02@1x.jpg", "07-simran-03@1x.jpg", "07-simran-04@1x.jpg", "07-simran-05@1x.jpg"],
      "@2x" : ["07-simran-01@2x.jpg", "07-simran-02@2x.jpg", "07-simran-03@2x.jpg", "07-simran-04@2x.jpg", "07-simran-05@2x.jpg"],
    },
    "08-rose" : {
      "@1x" : ["08-rose-01@1x.jpg", "08-rose-02@1x.jpg", "08-rose-03@1x.jpg", "08-rose-04@1x.jpg", "08-rose-05@1x.jpg"],
      "@2x" : ["08-rose-01@2x.jpg", "08-rose-02@2x.jpg", "08-rose-03@2x.jpg", "08-rose-04@2x.jpg", "08-rose-05@2x.jpg"],
    },
    "09-henry" : {
      "@1x" : ["09-henry-01@1x.jpg", "09-henry-02@1x.jpg", "09-henry-03@1x.jpg", "09-henry-04@1x.jpg", "09-henry-05@1x.jpg"],
      "@2x" : ["09-henry-01@2x.jpg", "09-henry-02@2x.jpg", "09-henry-03@2x.jpg", "09-henry-04@2x.jpg", "09-henry-05@2x.jpg"],
    },
    "10-jaysea" : {
      "@1x" : ["10-jaysea-01@1x.jpg", "10-jaysea-02@1x.jpg", "10-jaysea-03@1x.jpg"],
      "@2x" : ["10-jaysea-01@2x.jpg", "10-jaysea-02@2x.jpg", "10-jaysea-03@2x.jpg"],
    },
  };


  SmallImageArray = imagesJson[selector]["@1x"];
  LargeImageArray = imagesJson[selector]["@2x"];
  var content = "";

  for(var i=0; i<SmallImageArray.length; i++) {
    var onexSrc = "images/bios/" + selector + "/interests/@1x/" + imagesJson[selector]["@1x"][i] + " 1x";
    var twoxSrc = "images/bios/" + selector + "/interests/@2x/" + imagesJson[selector]["@2x"][i] + " 2x";

    content +=  "<div class='item'>" +
                "<img srcset=" + '\"' + onexSrc + ", " + twoxSrc + '\"' + " alt='Chania' width='460' height='345'/>" +
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
    if (calcWindowWidth() >= 650) {
      loadCarouselImages($(this).attr('rel'));
      $(".grid").css({background:"transparent"});
      $(".grid").css("pointer-events","none");
      var selected = this;
      $(selected).children(".image-rollover").css("opacity", "1");
      $(function() {
        $('.grid > div').sort(function(){
          return Math.random()*10 > 5 ? 1 : -1;
        }).not(selected).each(function(i) {
          $(this).delay((i++) * 50).fadeOut(500);
        });
      });

      $(".cross").fadeIn(1000);

    };
  });
};

function fadeInImages() {
  $(".cross").click(function() {
    $(".grid").css("pointer-events","auto");
    $(".grid").css({background:"#fac421"});
    $('.grid div').fadeIn(1000);
    $(".image-rollover").css("opacity", "0");
    $(".cross").fadeOut(1000);
  });
};

function rolloverText() {
  $('.image-rollover .content').each(function() {
      $(this).css('margin-top', $(this).parent().height()-$(this).height());
  });
};

// $(".image-rollover").hover(function(){
//   $(this).css("opacity", 1);
//     }, function(){
//       $(this).css("opacity", 0);
// });
