document.addEventListener('DOMContentLoaded', function() {
    var menuBar = document.querySelector('#menu_bar');
    var menuLink = document.querySelector('.nav__list');

    menuLink.style.top = '-450px';

    menuBar.onclick = function() {
        if (menuLink.style.top === '-450px') {
            menuLink.style.top = '50px';
        } else {
            menuLink.style.top = '-450px';
        }
    };
});