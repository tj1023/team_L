window.onload = function(){
    var slideCon = $('.slide_con');
    var slideTimer;
    var delayTime = 1500;
    slideTimer = setInterval(changeSlide, delayTime);
    var slideIndex = 0;
    var slideTotal = slideCon.length;
    var slideH = 300;    
    for(var i = 0; i < slideTotal; i++) {
        var tempH = i * slideH;
        slideCon.eq(i).css('top', tempH);
    }

    function changeSlide() {

        $.each(slideCon, function(index, item) {
            var tgX = $(this).css('top');
            tgX = parseInt(tgX);
            tgX = tgX - slideH;

            if(tgX < -slideH * (slideTotal - 1) ) {
                $(this).css('top', slideH);
                tgX = 0;
            }

            $(this).stop().animate({
                'top': tgX
            });
        
        });
    }
}
