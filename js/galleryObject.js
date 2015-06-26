var Gallery = function() {
  this.bodyText = [];
  this.titleText = [];
  this.bioText = "";
  this.numOfImages = 0;
  this.imageIndex = 0;
};

Gallery.prototype.loadImagesIntoCarousel = function (selector) {
  var html = "";
  this.numOfImages = imagesJson[selector].length;

  for(var i=0; i<this.numOfImages; i++) {

    var smallImage = imagesJson[selector][i]["image"][0] ;
    var largeImage = imagesJson[selector][i]["image"][1] ;
    var onexSrc = "images/bios/" + selector + "/interests/@1x/" + smallImage;
    var twoxSrc = "images/bios/" + selector + "/interests/@2x/" + largeImage;

    html +=  "<div class='item' style=" + '\"' + "background-image: url(" + twoxSrc + "); background-size: cover" + '\"' + ">" + "<div class=" + '\"' + "img-gradient" + '\"' + "></div></div>";
    $(".carousel-inner").html(html);
    $(".carousel-inner .item").first().attr('class', 'item active');
  };
};

Gallery.prototype.loadTextIntoArray = function (imageSelector) {
    for(var i=0; i<this.numOfImages; i++) {
    this.bodyText.push( imagesJson[imageSelector][i]["text"]["body"] );
    this.titleText.push( imagesJson[imageSelector][i]["text"]["title"] );
  };
};

Gallery.prototype.loadTextIntoCarousel = function (imageSelector, selectedImage) {
  var imageBioText= $(selectedImage).find(".info").html();

  gallery.loadTextIntoArray(imageSelector);

  $(".image-info.bio").html(imageBioText);
  $(".image-info.description .title").html(this.titleText[0]);
  $(".image-info.description .body").html(this.bodyText[0]);
};

Gallery.prototype.clickRightArrow = function () {
  if( this.imageIndex < this.numOfImages-1 ) { this.imageIndex += 1 }
  else { this.imageIndex = 0 };
  this.insertImageText();
};

Gallery.prototype.clickLeftArrow = function () {
  if( this.imageIndex > 0 ) { this.imageIndex -= 1 }
  else { this.imageIndex = this.numOfImages-1 };
  this.insertImageText();
};

Gallery.prototype.insertImageText = function (first_argument) {
  $(".image-info.description .title").html(this.titleText[this.imageIndex]);
  $(".image-info.description .body").html(this.bodyText[this.imageIndex]);
};

Gallery.prototype.resetCarousel = function () {
  this.bodyText = [];
  this.titleText = [];
  this.bioText = "";
  this.numOfImages = 0;
  this.imageIndex = 0;
};
