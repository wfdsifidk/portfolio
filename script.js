document.addEventListener('DOMContentLoaded', function () {
    new Glide('#glide1').mount();
    new Glide('#glide2').mount();
    new Glide('#glide3').mount();
    new Glide('#glide4').mount();

    updateThemeBasedOnScroll(); // запускаем сразу при загрузке
});

window.addEventListener('scroll', function () {
    updateThemeBasedOnScroll();
});

function updateThemeBasedOnScroll() {
    const scrollY = window.scrollY;
    const body = document.body;

    if (scrollY >= 600) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }
}