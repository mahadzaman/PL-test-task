$(".slickin").slick({
    autoplay: true
});
$(".community-carousel .row").slick({
    autoplay: true,
    slidesToShow: 4,
    slideToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});