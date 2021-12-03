$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.burger-menu__link').click(function(event) {
        $('.header__burger,.burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(".burger-menu__link").on("click", function(event){
        event.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });

    $(".header__link").on("click", function(event){
        event.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });
});