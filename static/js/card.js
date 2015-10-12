$(document).ready(function () {
    $(".info-box").click(function(){
        var height = $(this).height();
        $(this).css('height', height+'px');

        var infobox = $(this);
        if($(this).children(".inf").css('opacity') == 1){
            $(this).children(".inf").animate({opacity: 0},
                                             {duration: 400, step: function(now, fx){
                                                                        infobox.css('transform','rotateY('+(360 - now*360)+'deg)');
                                                                    }
                                             });
        }else{
            $(this).children(".inf").animate({opacity: 1},
                                             {duration: 400, step: function(now, fx){
                                                                        infobox.css('transform','rotateY('+(360 - now*360)+'deg)');
                                                                    }
                                             });
        }

        $(this).children(".inf").toggle();
        $(this).children(".des").toggle();
    });

    $(".info-box").hover(function(){
        if($(this).css('opacity') == 1){
            $(this).animate({opacity: 0.95},
                                             {duration: 100, step: function(now, fx){
                                                                        $(this).css('transform','scale('+now+')');
                                                                    }
                                             });
        }else{
            $(this).animate({opacity: 1},
                                             {duration: 100, step: function(now, fx){
                                                                        $(this).css('transform','scale('+now+')');
                                                                    }
                                             });
        }
    });

    $(".dp-title").scrollFix()
});

