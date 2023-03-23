$(function(){
    $('#banner').slick({
        autoplay:true,
        arrows:true,
        autoplaySpeed: 4000,
        speed: 3000,
        prevArrow: '<i class="fas fa-arrow-circle-left banner_left"></i>',
        nextArrow: '<i class="fas fa-arrow-circle-right banner_right"></i>',
        dots: true,
        dotsClass: "banner_dots",
    });
});