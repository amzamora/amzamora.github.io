document.addEventListener("scroll", setHeaderStyle);

function setHeaderStyle() {
    let header = document.getElementsByClassName("site-header")[0];

    if (document.documentElement.scrollTop === 0) {
        header.style.backgroundColor = "";
        header.style.boxShadow = "";
        //header.style.height = "";

    } else {
        header.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.1)";
        //header.style.height = "4.2rem";
        if (CSS.supports("backdrop-filter", "blur(20px)")) {
            header.style.backdropFilter = "blur(20px)";
        } else {
            header.style.backgroundColor = "aliceblue";
        }
    }
}
