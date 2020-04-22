document.addEventListener("scroll", setHeaderStyle);

function setHeaderStyle() {
    let header = document.getElementsByClassName("site-header")[0];

    if (document.documentElement.scrollTop === 0) {
        header.style.backgroundColor = "initial";
        header.style.boxShadow = "initial";

    } else {
        console.log(window.navigator.appName);
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.1)";
    }
}
