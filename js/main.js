  $(document).ready(function(){
        $("section").each(function(index){
        $(this).on("click", function(){
        $('html,body').animate({
                scrollTop: $(this).next().offset().top},
                'slow');
        });
        });
        $(".btnSquare").click(function(event){
        event.stopPropagation();
        });
    });