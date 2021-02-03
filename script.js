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
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 1110 || position <= 0) {
            $('.camera-img').addClass('moveLeft');
            $('.mission-text').addClass('moveRight');

        } else {
            $('.camera-img').removeClass('moveLeft');
            $('.mission-text').removeClass('moveRight');
        }
    });
    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
        if(value === 'all'){
            $('.filter').show(300);
        }
        else{
            $('.filter').not('.'+ value).hide(300);
            $('.filter').filter('.'+ value).show(300)

        }
    });
    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position>=4100){
            $('.card-1').addClass('movefromLeft')
            $('.card-3').addClass('movefromRight')
            $('.card-2').addClass('movefromBottom')
        }
        else{
            $('.card-1').removeClass('movefromLeft')
            $('.card-3').removeClass('movefromRight')
            $('.card-2').removeClass('movefromBottom')
        }
    });
});