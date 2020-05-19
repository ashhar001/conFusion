$(document).ready(function(){
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');
    });

    $('#reserveButton').click(function(){
       $('#reserveModal').modal('toggle');
    });
    
});


//"start": "npm run watch:all",

//"watch:scss": "onchange \"css/*.scss\" -- npm run scss",
//"watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""