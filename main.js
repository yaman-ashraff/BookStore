function changeBgC() {
    var navbar = document.getElementById('navbar');
    var scrollVal = window.screenY;
    if (scrollVal < 80) {
        navbar.classList.remove('bgColor');
    }
    else {
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll',changeBgC);
