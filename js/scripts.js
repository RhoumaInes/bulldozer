

$(document).ready(function() {
$('.slider-content>div').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots:true,
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots:true,
            }
        }
    ]
});

});