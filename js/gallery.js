$(document).ready( function() {
  body = [];
  title = [];
  numOfImages = 0;
  navbarHeight = 50;

  setArrowPosition();
  fadeOutImages();
  fadeInImages();
  changeImageText();
  setRolloverText();

  if ( $(window).width() < 430 ) {
    $("#image11, #image12").css("display", "none");
  };

  $(window).resize(function() {
    setArrowPosition();
    setUpCarousel();
    setDescriptionPosition();
    setRolloverText();
  });

  $("#myCarousel").swiperight(function() {
      $("#myCarousel").carousel('prev');
    });
   $("#myCarousel").swipeleft(function() {
      $("#myCarousel").carousel('next');
   });

});

function setUpCarousel() {
  var carouselHeight = $("#image-gallery.container").height();
  if ( $(window).width() < 430 ) {
    $(".carousel-inner").css("height", 500);
    $(".carousel-inner > .item").css("height", 500);
  }
  else {
    $(".carousel-inner").css("height", carouselHeight);
    $(".carousel-inner > .item").css("height", carouselHeight);
  };

  setArrowPosition();
};

function setArrowPosition() {
  var containerHeight = $(".carousel-inner").height();
  var arrowHeight = $('img.left-arrow').height();
  var padding = (containerHeight/2) - (arrowHeight/2);
  $('.carousel-control').css("padding-top", padding);
};

function setRolloverText() {
  $(".image-rollover").each(function() {
    var containerHeight = $(this).height();
    var textHeight = $(this).find(".content").height();
    var padding = (containerHeight/2) - (textHeight/2);
    $(this).find(".content").css("padding-top", padding);
  });
}

function setDescriptionPosition() {
  var descriptiondDivWidth = $(".image-info.description").width();
  var bioDivWidth = $(".image-info.bio").width();
  var windowWidth = $(window).width();
  $(".image-info.description").css( "left", windowWidth/2 - descriptiondDivWidth/2 );
  $(".image-info.bio").css( "left", windowWidth/2 - bioDivWidth/2 );

};

function fadeOutImages() {
  $(".grid-item").click(function() {

    var imageSelector = $(this).attr('rel');
    selectedImage = this;

    $(selectedImage).children(".image-rollover").css("opacity", "1");

    var imageBioText= $(selectedImage).find(".info").html();
    $(".image-info.bio").html(imageBioText);

    loadCarouselImages(imageSelector);
    setDescriptionPosition();
    $("#carousel.container").fadeIn("slow");
    setUpCarousel();

    if ( $(window).width() < 430 ) {
      $('.grid').css("display", "none");
      $('html, body').animate({
        scrollTop: $(".carousel-inner").offset().top - navbarHeight
      }, 0);
    }
    else {
      $('.grid > div').sort(function(){
        return Math.random()*10 > 5 ? 1 : -1;
      }).each(function(i) {
        $(this).delay((i++) * 100).fadeTo(200, 0, function(){
          $(this).css("visibility", "hidden");
        });;
      });
    };


    $('.grid').css("pointer-events", "none");

    $(".cross").fadeIn(1000);

  });
};

function fadeInImages() {
  $(".cross").click(function() {
    $('.grid').css("pointer-events", "auto");

    if ( $(window).width() < 430 ) {
      $('.grid').css("display", "inline");
      $("#carousel.container").fadeOut("slow")    }
    else {
      $('.grid > div').sort(function(){
        return Math.random()*10 > 5 ? 1 : -1;
      }).each(function(i) {
        $(this).delay((i++) * 50).fadeTo(50, 0, function(){
          $(this).css({"opacity": 1, "visibility": "visible"});
        });;
      });
    };

    $(".image-rollover").css("opacity", "0");
    $(".cross").fadeOut(1000);

    body = [];
    title = [];
    numOfImages = 0

  });
};



function loadCarouselImages(selector) {

  var content = "";
  smallImageArray = [];
  largeImageArray = [];
  numOfImages = imagesJson[selector].length;

  for(var i=0; i<numOfImages; i++) {

    var smallImage = imagesJson[selector][i]["image"][0] ;
    var largeImage = imagesJson[selector][i]["image"][1] ;

    var onexSrc = "images/bios/" + selector + "/interests/@1x/" + smallImage;
    var twoxSrc = "images/bios/" + selector + "/interests/@2x/" + largeImage;

    content +=  "<div class='item' style=" + '\"' + "background-image: url(" + twoxSrc + "); background-size: cover" + '\"' + ">" + "<div class=" + '\"' + "img-gradient" + '\"' + "></div></div>";
    body.push( imagesJson[selector][i]["text"]["body"] );
    title.push( imagesJson[selector][i]["text"]["title"] );


    $(".carousel-inner").html(content);
    $(".carousel-inner .item").first().attr('class', 'item active');

  };

    $(".image-info.description .title").html(title[0]);
    $(".image-info.description .body").html(body[0]);


};

function changeImageText() {
  var i = 0;

  $('.carousel-control.right').click(function() {

    if( i<numOfImages-1 ) { i += 1 }
    else { i = 0 };
    $(".image-info.description .title").html(title[i]);
    $(".image-info.description .body").html(body[i]);
  });

  $('.carousel-control.left').click(function() {

    if( i>0 ) { i -= 1 }
    else { i = numOfImages-1 };
    $(".image-info.description .title").html(title[i]);
    $(".image-info.description .body").html(body[i]);
  });
};

imagesJson = {
    "01-ellie": [
        {
            "image": [
                "01-ellie-01@1x.jpg",
                "01-ellie-01@2x.jpg"
            ],
            "text": {
                "title": "Beauty in the Unique",
                "body": "Ellie told us that developing her own individual style had helped her to express herself and stand out."
            }
        },
        {
            "image": [
                "01-ellie-02@1x.jpg",
                "01-ellie-02@2x.jpg"
            ],
            "text": {
                "title": "Strong Sense of Self",
                "body": "As with Eligh, Ellie told us she admired David Bowie for his ability to adapt to the times whilist staying true to his core values."
            }
        },
        {
            "image": [
                "01-ellie-03@1x.jpg",
                "01-ellie-03@2x.jpg"
            ],
            "text": {
                "title": "Ageless Era",
                "body": "Vivian Westwood was also held in high estime by Ellie, as she loved Westwood refusal to be defined by age."
            }
        },
        {
            "image": [
                "01-ellie-04@1x.jpg",
                "01-ellie-04@2x.jpg"
            ],
            "text": {
                "title": "4th Wave Feminism",
                "body": "The Rookie Year Book by Tavi Genvinson introduced Ellie to feminism and she is inspired by the talented teenage girls who contrib- ute to it."
            }
        },
        {
            "image": [
                "01-ellie-05@1x.jpg",
                "01-ellie-05@2x.jpg"
            ],
            "text": {
                "title": "Tangible Interface",
                "body": "Ellie had a vintage typewritter as she enjoyed the novelty of the analogue experi- ence it offered."
            }
        }
    ],
    "02-bella-and-jo": [
        {
            "image": [
                "02-bella&jo-01@1x.jpg",
                "02-bella&jo-01@2x.jpg"
            ],
            "text": {
                "title": "Strength through Inclusivity",
                "body": "Joanna and Bella believed that every member of their all female robot- ics team add a unique skill allowing them to achieve more than if they worked on their own."
            }
        },
        {
            "image": [
                "02-bella&jo-02@1x.jpg",
                "02-bella&jo-02@2x.jpg"
            ],
            "text": {
                "title": "Breaking Gender Stereotypes",
                "body": "Joanna and Bella act as mentors to other students and are keen to inspire girls to get into Robotics."
            }
        },
        {
            "image": [
                "02-bella&jo-03@1x.jpg",
                "02-bella&jo-03@2x.jpg"
            ],
            "text": {
                "title": "Under the Surface",
                "body": "Joanna likes to understand how things works as it helps her to establish trust in new technologies."
            }
        },
        {
            "image": [
                "02-bella&jo-04@1x.jpg",
                "02-bella&jo-04@2x.jpg"
            ],
            "text": {
                "title": "Digital Mistrust",
                "body": "Joanna creates multiple backups of photographs; three digital and occasionally addi- tional physical prints."
            }
        },
        {
            "image": [
                "02-bella&jo-05@1x.jpg",
                "02-bella&jo-05@2x.jpg"
            ],
            "text": {
                "title": "Accessible Role Models",
                "body": "The majority of the people that Bella and Joanna admire the most are those they have met in person, including their teacher Mr Sadler."
            }
        }
    ],
    "03-eligh": [
        {
            "image": [
                "03-eligh-01@1x.jpg",
                "03-eligh-01@2x.jpg"
            ],
            "text": {
                "title": "Tech-enabled Creativity",
                "body": "Eligh enjoys the scope for orignality that learning coding has offered him."
            }
        },
        {
            "image": [
                "03-eligh-02@1x.jpg",
                "03-eligh-02@2x.jpg"
            ],
            "text": {
                "title": "Fan Communities/New Media Channels",
                "body": "Eligh watched popular YouTube channel Yogscast, enjoy- ing the sense of community the network of gaming broadcasters offer."
            }
        },
        {
            "image": [
                "03-eligh-03@1x.jpg",
                "03-eligh-03@2x.jpg"
            ],
            "text": {
                "title": "Collaboration over Distance",
                "body": "Eligh and his friends turn Skype on so they can talk to one anoth- er real time whilst gaming remotely."
            }
        },
        {
            "image": [
                "03-eligh-04@1x.jpg",
                "03-eligh-04@2x.jpg"
            ],
            "text": {
                "title": "Emphasis on Narritive",
                "body": "Eligh preffered games that were visually striking and emotive."
            }
        },
        {
            "image": [
                "03-eligh-05@1x.jpg",
                "03-eligh-05@2x.jpg"
            ],
            "text": {
                "title": "Transformation as a Virtue",
                "body": "As with Ellie, Eligh was a fan of David Bowie’s chameleonic personality. He belived that the ability to adapt would be key to sucess in our instable global environment."
            }
        }
    ],
    "04-elliot": [
        {
            "image": [
                "04-elliot-01@1x.jpg",
                "04-elliot-01@2x.jpg"
            ],
            "text": {
                "title": "Apeitite for Self-expression",
                "body": "Elliot has a start-up business customising small-scale consumer electronics for his school mates."
            }
        },
        {
            "image": [
                "04-elliot-02@1x.jpg",
                "04-elliot-02@2x.jpg"
            ],
            "text": {
                "title": "Physical Adaptation",
                "body": "Elliots finger had bent after years of gaming to fit the shape of his playstation controller."
            }
        },
        {
            "image": [
                "04-elliot-03@1x.jpg",
                "04-elliot-03@2x.jpg"
            ],
            "text": {
                "title": "Physical Digital Mashup",
                "body": "While Elliot is optimistic about gestural interfaces he finds comfort in the tactility and precision offered by physical interactions."
            }
        },
        {
            "image": [
                "04-elliot-04@1x.jpg",
                "04-elliot-04@2x.jpg"
            ],
            "text": {
                "title": "Creativity through Constraint",
                "body": "Elliot had built himself a pop-up workshop in his bedroom."
            }
        },
        {
            "image": [
                "04-elliot-05@1x.jpg",
                "04-elliot-05@2x.jpg"
            ],
            "text": {
                "title": "Under the Surface",
                "body": " As with Johanna and Bella, Elliot told us he enjoys taking apart products as it him helps him to understand how they work."
            }
        }
    ],
    "05-alessandra": [
        {
            "image": [
                "05-alessandra-01@1x.jpg",
                "05-alessandra-01@2x.jpg"
            ],
            "text": {
                "title": "Socially Minded",
                "body": "Alessandra founded her blog to share Paleo recipes with other allergy sufferers glob- ally having found it difficult to find recipes for herself."
            }
        },
        {
            "image": [
                "05-alessandra-02@1x.jpg",
                "05-alessandra-02@2x.jpg"
            ],
            "text": {
                "title": "Prioritising Health",
                "body": "Alessandra was interested in high-quality ingredients that would increase her sense of wellbeing."
            }
        },
        {
            "image": [
                "05-alessandra-03@1x.jpg",
                "05-alessandra-03@2x.jpg"
            ],
            "text": {
                "title": "Support Networks",
                "body": "Alessandra had filled in for a fellow blogger (who she has never met) to ensure her site stayed active whilst she holidayed."
            }
        },
        {
            "image": [
                "05-alessandra-04@1x.jpg",
                "05-alessandra-04@2x.jpg"
            ],
            "text": {
                "title": "Content Creation",
                "body": "Alessandra enjoys developing her own recipes and documents them on social media."
            }
        },
        {
            "image": [
                "05-alessandra-05@1x.jpg",
                "05-alessandra-05@2x.jpg"
            ],
            "text": {
                "title": "Creative Outlets",
                "body": "Alessandra adores ballette as it offered a non-verbal means of self-expression."
            }
        }
    ],
    "06-lewis": [
        {
            "image": [
                "06-lewis-01@1x.jpg",
                "06-lewis-01@2x.jpg"
            ],
            "text": {
                "title": "Adventure deficit",
                "body": "Lewis spoke about how phys- ically their generation don’t have to exert themselves that much any more, therefore they are more driven to tackle extreme challenges."
            }
        },
        {
            "image": [
                "06-lewis-02@1x.jpg",
                "06-lewis-02@2x.jpg"
            ],
            "text": {
                "title": "Global Horizons",
                "body": "Lewis was accutly aware of issues sourounding environmental instability, believeing it to be a communal challenge we all face together."
            }
        },
        {
            "image": [
                "06-lewis-03@1x.jpg",
                "06-lewis-03@2x.jpg"
            ],
            "text": {
                "title": "Small World",
                "body": "Further more Lewis told us of how the global connection enabled by internet has made the world’s population feel more tight-knit."
            }
        },
        {
            "image": [
                "06-lewis-04@1x.jpg",
                "06-lewis-04@2x.jpg"
            ],
            "text": {
                "title": "Desire for customisation",
                "body": "Lewis had hacked his equipment to better suit his individual needs."
            }
        },
        {
            "image": [
                "06-lewis-05@1x.jpg",
                "06-lewis-05@2x.jpg"
            ],
            "text": {
                "title": "Savvy Consumer",
                "body": "Lewis’ focus on functionality and value for money stretched beyond the kit he’d choosen for his artic challenge."
            }
        }
    ],
    "07-simran": [
        {
            "image": [
                "07-simran-01@1x.jpg",
                "07-simran-01@2x.jpg"
            ],
            "text": {
                "title": "We Over I",
                "body": "Simran loved the sense of community that comes with running crew culture."
            }
        },
        {
            "image": [
                "07-simran-02@1x.jpg",
                "07-simran-02@2x.jpg"
            ],
            "text": {
                "title": "Tangible Tracking",
                "body": "Along with training apps Simran also liked to physically keep track of his accomplishments."
            }
        },
        {
            "image": [
                "07-simran-03@1x.jpg",
                "07-simran-03@2x.jpg"
            ],
            "text": {
                "title": "Mind Body Connection",
                "body": "Simran believed that running gave him physical and mental strength."
            }
        },
        {
            "image": [
                "07-simran-04@1x.jpg",
                "07-simran-04@2x.jpg"
            ],
            "text": {
                "title": "Gender Equal",
                "body": "Simran believes that his generation are far more equally minded around gender issues than previous generations."
            }
        },
        {
            "image": [
                "07-simran-05@1x.jpg",
                "07-simran-05@2x.jpg"
            ],
            "text": {
                "title": "Altruistic Aspirations",
                "body": "Simran’s future goals were intertwined with the notion of giving back to society."
            }
        }
    ],
    "08-rose": [
        {
            "image": [
                "08-rose-01@1x.jpg",
                "08-rose-01@2x.jpg"
            ],
            "text": {
                "title": "Empowered Expression",
                "body": "Rose loved that she had been able to launch her blog with very small start up costs."
            }
        },
        {
            "image": [
                "08-rose-02@1x.jpg",
                "08-rose-02@2x.jpg"
            ],
            "text": {
                "title": "Multi-channel Discovery",
                "body": "Rose discovers new brands and products online through social channels such as Instagram aswell as visiting stores in person."
            }
        },
        {
            "image": [
                "08-rose-03@1x.jpg",
                "08-rose-03@2x.jpg"
            ],
            "text": {
                "title": "Trusted Voices",
                "body": "Rose told us that she prefers video formats as blog post as they give the veiwer a better sense of the true character of the author."
            }
        },
        {
            "image": [
                "08-rose-04@1x.jpg",
                "08-rose-04@2x.jpg"
            ],
            "text": {
                "title": "Skill Seeker",
                "body": "Rose told us she enjoyed the new skills that hosting a blog allowed her to learn."
            }
        },
        {
            "image": [
                "08-rose-05@1x.jpg",
                "08-rose-05@2x.jpg"
            ],
            "text": {
                "title": "International Outlook",
                "body": "Rose’s ambition for a ca- reer in fashion had led her to start learning Mandarin, as she recognised China as an upcoming hub for global fashion."
            }
        }
    ],
    "09-henry": [
        {
            "image": [
                "09-henry-01@1x.jpg",
                "09-henry-01@2x.jpg"
            ],
            "text": {
                "title": "Entrepreniurally Minded",
                "body": "Henry has been creating a broad range of branded merchandise from home."
            }
        },
        {
            "image": [
                "09-henry-02@1x.jpg",
                "09-henry-02@2x.jpg"
            ],
            "text": {
                "title": "Creative Mindset",
                "body": "When we met Henry he had just self published his first story book."
            }
        },
        {
            "image": [
                "09-henry-03@1x.jpg",
                "09-henry-03@2x.jpg"
            ],
            "text": {
                "title": "Omniverious Career Ambitions",
                "body": "The ‘Not before Tea’ brand is just the start for Henry, who is keen to experience a variety of professions as he matures."
            }
        },
        {
            "image": [
                "09-henry-04@1x.jpg",
                "09-henry-04@2x.jpg"
            ],
            "text": {
                "title": "Joy of Discovery",
                "body": "Henry sited that the best thing about being an entrepreniure is the opportunitity to meet inspiring people."
            }
        },
        {
            "image": [
                "09-henry-05@1x.jpg",
                "09-henry-05@2x.jpg"
            ],
            "text": {
                "title": "Vocal and Outspoken",
                "body": "Henry shares his voice online via a radio show that he hosts remotely with his friend."
            }
        }
    ],
    "10-jaysea": [
        {
            "image": [
                "10-jaysea-01@1x.jpg",
                "10-jaysea-01@2x.jpg"
            ],
            "text": {
                "title": "Searching for Balance",
                "body": "Jaysea is the youngest certified yoga instructur in the USA."
            }
        },
        {
            "image": [
                "10-jaysea-02@1x.jpg",
                "10-jaysea-02@2x.jpg"
            ],
            "text": {
                "title": "Holistic Intergrity",
                "body": "Jaysea is planning on developing an ethically produced yoga mat business."
            }
        },
        {
            "image": [
                "10-jaysea-03@1x.jpg",
                "10-jaysea-03@2x.jpg"
            ],
            "text": {
                "title": "Primal Instincts",
                "body": "Jaysea enjoyed excersising outdoors as it helped her to re-connect to the physical world."
            }
        },
        {
            "image": [
                "10-jaysea-04@1x.jpg",
                "10-jaysea-04@2x.jpg"
            ],
            "text": {
                "title": "Cool to Care",
                "body": "Giving back is close to Jaysea’s heart. She volunteers every week at a local organic farm and teaches yoga on a donation basis."
            }
        }
    ]
}
