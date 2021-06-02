$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        margin:10,
        lazyLoad:true,
        responsiveClass:true,
        navText: ["<img src='./img/icons/ArrowLeft.svg'>","<img src='./img/icons/ArrowLeft.svg'>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });


});