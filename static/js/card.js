$(document).ready(function () {
    $(".info-box").click(function(){
        var height = $(this).height();
        $(this).css('height', height+'px');

        var infobox = $(this);
        if($(this).find(".inf").css('opacity') == 1){
            $(this).find(".inf").animate({opacity: 0},
                                             {duration: 400, step: function(now, fx){
                                                                        infobox.css('transform','rotateY('+(360 - now*360)+'deg)');
                                                                    }
                                             });
        }else{
            $(this).find(".inf").animate({opacity: 1},
                                             {duration: 400, step: function(now, fx){
                                                                        infobox.css('transform','rotateY('+(360 - now*360)+'deg)');
                                                                    }
                                             });
        }

        $(this).find(".inf").toggle();
        $(this).find(".des").toggle();
        $(this).find(".info-box-image").toggle();
    });

    $(".info-box").hover(function(){
        if($(this).find(".inf").length > 0){
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
        }
    });

    $(".dp-title").scrollFix()
});

