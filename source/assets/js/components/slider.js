import $ from "jquery";
import 'slick-carousel/slick/slick';

const slider = () => {
    $('.teaser-triple__content').slick({
        slide: '.teaser-triple__item',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        rows: 0,
        arrows: false,

        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1025
            }
        ]
    });

    $(window).on('resize orientationchange', function() {
        $('.teaser-triple__content').slick('resize');
    });
};

export default slider;