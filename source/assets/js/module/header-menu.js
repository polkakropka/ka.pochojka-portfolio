import $ from 'jquery';

const Header = () => {
    const iconMenu = $('.icon-menu');
    const menu = $('.header__menu');

    iconMenu.on('click', function () {
        $(this).toggleClass('.icon-menu .icon-close');
        menu.toggleClass('open');
        console.log('bum')
    })

};

export default Header;