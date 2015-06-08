$(document).ready(function() {

    if( $(window).width() > 768 ) {
      var paralaxative = skrollr.init({
          render: function(data) {
              //Debugging - Log the current scroll position.
              // console.log(data.curTop);
          }
      });
    };
});
