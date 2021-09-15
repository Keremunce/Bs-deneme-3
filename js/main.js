$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop()>50);
});

$('.owl-carousel').owlCarousel({

    loop:true,
    margin:10,
    nav:true,
    navText:[  '<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.5
        }
    }
})