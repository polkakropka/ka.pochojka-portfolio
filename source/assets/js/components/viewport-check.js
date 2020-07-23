const viewportCheck = () => {
    const header = document.querySelector('header');
    let intViewportWidth = window.innerWidth;


    if(intViewportWidth <=  576 && header.classList.contains('open')) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }

};

export default viewportCheck;