const fixedNav = () => {
    const header = document.querySelector('header');
    const intro = document.querySelector('#intro');
    const nav = document.querySelector('#nav');
    let introHeight = intro.clientHeight - 600;

    function fixNav() {

        if (window.scrollY >= introHeight) {
            //document.body.style.paddingTop = nav.offsetHeight + 'px';
            document.body.classList.add('fixed-nav');
        } else {
            document.body.classList.remove('fixed-nav');
            //document.body.style.paddingTop = 0;
        }
    }
     if(header) {
        window.addEventListener('scroll', fixNav);
     }
};

export default fixedNav;