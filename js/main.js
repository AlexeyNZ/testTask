  $(document).ready(function(){
        $(".bannerFirst").click(function() {
        $('html,body').animate({
        scrollTop: $(".fourSquares").offset().top},
        'slow');
        });
        $(".fourSquares").click(function() {
        $('html,body').animate({
        scrollTop: $(".bannerSecond").offset().top},
        'slow');
        });
        $(".btnSquare").click(function(event){
        event.stopPropagation();
        });
    });