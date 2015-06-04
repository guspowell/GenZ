$(document).ready(function() {
    console.log( "are we ready?" );

    var paralaxative = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            console.log(data.curTop);
        }
    });

    
});

