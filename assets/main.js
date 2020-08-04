document.addEventListener("scroll", setHeaderStyle);
document.addEventListener("load", setHeaderStyle);

function setHeaderStyle() {
    let header = document.getElementsByClassName("site-header")[0];
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (document.documentElement.scrollTop === 0) {
         header.style.backgroundColor = "";
         header.style.boxShadow = "";

    }
    else {
        if (vw < 1200) {
            //header.style.backdropFilter = "blur(20px)";
            header.style.boxShadow = "0px 1px 1px rgba(0, 0, 0, 0.1)";
            header.style.backgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        }
    }
}
