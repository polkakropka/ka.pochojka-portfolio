import $ from "jquery";
import HeaderOnScroll from "./module/header-scroll";
import Header from "./module/header-scroll";

(function () {
    console.log('==> Init scripts');
})();

document.addEventListener("touchstart", function(){}, true);

$(document).ready(function () {
    HeaderOnScroll();
    Header();
});