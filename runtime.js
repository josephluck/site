function openNav() {
    var nav = document.querySelector('nav');
    var main = document.querySelector('main');
    if (nav && main) {
        nav.classList.remove('slide-out');
        main.classList.add('fade-out');
    }
}
function closeNav() {
    var nav = document.querySelector('nav');
    var main = document.querySelector('main');
    if (nav && main) {
        nav.classList.add('slide-out');
        main.classList.remove('fade-out');
    }
}
function closeNavIfClickOutside(e) {
    var nav = document.querySelector('nav');
    var navOpenElm = document.getElementById('nav-toggle');
    if (nav && navOpenElm && !nav.contains(e.target) && !navOpenElm.contains(e.target)) {
        closeNav();
    }
}
function bindEventListeners() {
    var navOpenElm = document.getElementById('nav-toggle');
    var main = document.querySelector('main');
    var nav = document.querySelector('nav');
    if (navOpenElm) {
        navOpenElm.addEventListener('click', openNav);
    }
    if (nav && main) {
        document.body.addEventListener('click', closeNavIfClickOutside);
    }
}
document.addEventListener('turbolinks:load', bindEventListeners);
