function scrollValue() {
    var smoothScrollParalax = document.getElementById("paralax");
    var scroll = window.scrollY;
    if (scroll < 100) {
        smoothScrollParalax.classList.remove("paralax");
        smoothScrollParalax.classList.add("paralax-back");
    } else {
        smoothScrollParalax.classList.add("paralax");
        smoothScrollParalax.classList.remove("paralax-back");
    }
}

window.addEventListener("scroll", scrollValue);

