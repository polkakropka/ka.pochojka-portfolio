const header = () => {
    const header = document.querySelector('header');
    const headerLinks = document.querySelectorAll('header li');


    headerLinks.forEach(item =>
        item.addEventListener('click', function () {
            header.classList.remove("open");
            document.body.classList.remove('overflow-hidden');
        })
    )
};

export default header;