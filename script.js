$(document).ready(function() {
    //nav-bautton phone
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    //zoom in and out nav menu 
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 1200 || position <= 0) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('nav-menu').removeClass('custom-navbar');
        }
    });
});