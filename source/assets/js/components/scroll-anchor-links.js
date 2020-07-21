import $ from "jquery";

const scrollAnchorLinks = () => {
    const speed = 700;
    const removeFileName = path => {
        return path.replace(/[\w-]+[-\w\.]*\.\w+/, "");
    };

    // when header is fixed position, scroll animation adjusts the position
    function adjustScrollForHeader() {
        const actualHeader = document.querySelector("header");
        const adjustHeight = window
            .getComputedStyle(actualHeader)
            .getPropertyValue("height");
        const fixedHeader =
            window.getComputedStyle(actualHeader).getPropertyValue("position") ===
            "fixed";
        return fixedHeader ? adjustHeight.replace(/\D+/, "") - 0 : 0;
    }
    // looking for anchor tag, either id or data-scroll-anchor
    function targetModule(href) {
        const dataAttr = href.replace(/#/, "");
        const targetDataAttr = $(`[data-scroll-anchor="${dataAttr}"]`);

        const targetId = $(href == "#" || href == "" ? "html" : href);
        const moduleID = targetId[0].id;
        return targetDataAttr.length ? targetDataAttr : targetId;
    }

    // initialize anchor links when same pathname and set animation on click
    function init(module) {
        $(module).each(function() {
            if (removeFileName(this.pathname) === removeFileName(location.pathname)) {
                const y = this.hash.replace(/\+/g, '_');


                $(this).attr("href", y);
                $(this).on("click", function(e) {
                    // (e.preventDefault) ? e.preventDefault() : (e.returnValue = false);
                    e.preventDefault();
                    const target = targetModule(this.hash);

                    const position = target.offset().top - adjustScrollForHeader();
                    $("html, body").animate({ scrollTop: position }, speed, "swing");
                    return;
                });
            }
            return;
        });
        $(".content-wrapper").children('div').each(function() {

            const y = this.id.replace(/\+/g, '_');
            $(this).attr("id", y);
        });
    }

    $('.intro').length && init('.intro__nav__item a', ".intro");
    $('header').length && init(".header__menu a");


};

export default scrollAnchorLinks;
