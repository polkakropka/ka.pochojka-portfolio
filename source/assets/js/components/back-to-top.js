import $ from "jquery";

const backToTopBtn = () => {
    $(".back-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
};

export default backToTopBtn;