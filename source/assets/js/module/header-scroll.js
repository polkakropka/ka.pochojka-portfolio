import $ from "jquery";

const HeaderOnScroll = () => {
    const header = $('header');
    let height = 100;
    let viewportHeight = $(window).outerHeight() - 50;

    $(window).width(function () {
        if(window.innerWidth <= 768) {
            header.addClass('header-xl-js');
        } else {
            header.removeClass('header-xl-js');
        }
    });
    $(window).resize(function () {
        if(window.innerWidth <= 768) {
            header.addClass('header-xl-js');
        } else {
            header.removeClass('header-xl-js');
        }
    });
    $(window).scroll(function() {
        let scroll = getCurrentScroll();
        if ( scroll >= height && scroll < viewportHeight) {
            header.addClass('header-on-scroll-js');
            header.removeClass('header-darkback-js');
        }
        else if ( scroll >= height && scroll >= viewportHeight ) {
            header.addClass('header-darkback-js');
        } else {
            header.removeClass('header-on-scroll-js');
            header.removeClass('header-darkback-js');

        }
     });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
};

export default HeaderOnScroll;
