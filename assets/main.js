document.addEventListener("scroll", setHeaderStyle);

function setHeaderStyle() {
    let header = document.getElementsByClassName("site-header")[0];

    if (document.documentElement.scrollTop === 0) {
        header.style.backgroundColor = "";
        header.style.boxShadow = "";

    } else {
        header.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.1)";
        header.style.backgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    }
}
