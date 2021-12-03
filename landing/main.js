$(".form_select a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});
$(document).ready(function (){
    $('.small a').click(function (e){
        if( $('.big img').attr('src')!==$(this).attr('href'))
        {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
        e.preventDefault();
    });
});