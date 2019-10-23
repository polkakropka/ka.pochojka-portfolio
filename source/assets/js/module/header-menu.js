import $ from 'jquery';

const Header = () => {
    const header = $('.header');
    const iconMenu = $('.icon-menu');
    const menu = $('.header__menu');

    iconMenu.on('click', function () {
        $(this).toggleClass('icon-menu icon-close');
        header.removeClass('header-on-scroll-js');
        menu.toggleClass('open');
        $('body').toggleClass('overflow-hidden')
    })

};

export default Header;