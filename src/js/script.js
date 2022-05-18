// hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});

// click diluar menu close
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != nav) {
        hamburger.classList.remove('hamburger-active');
        nav.classList.add('hidden');
    }
});

// header scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const btnup = document.querySelector('#btnup');
    const headerHeight = header.offsetTop;

    if (window.pageYOffset > headerHeight) {
        header.classList.add('header-fixed');
        btnup.classList.remove('hidden');
        btnup.classList.add('flex');

    } else {
        header.classList.remove('header-fixed');
        btnup.classList.remove('flex');
        btnup.classList.add('hidden');
    }
});



// drak mode
// const togldark = document.querySelector('#togle-darkmode');
// const html = document.querySelector('html');

// togldark.addEventListener('click', function () {
//     togldark.checked ? html.classList.add('dark') : html.classList.remove('dark');
// });