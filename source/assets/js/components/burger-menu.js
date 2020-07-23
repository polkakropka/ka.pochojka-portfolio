import viewportCheck from "./viewport-check";

const burgerAnimation = () => {
    const burgerMenu = document.querySelector('#burger-menu');
    const header = document.querySelector('header');
    if(burgerMenu) {
        burgerMenu.addEventListener('click', function () {
            header.classList.toggle("open");
            viewportCheck();
        })
    }

};

export default burgerAnimation;