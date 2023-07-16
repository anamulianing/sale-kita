// Navbar
let body = document.getElementsByTagName('body')[0];
let navbar = document.getElementById('navbar');
let hero = document.querySelector('.hero');
let heroHeight = hero.offsetHeight;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > heroHeight - 200) {
    navbar.classList.add('shadow');
    navbar.style.backgroundColor = "rgba(169, 0, 0, 1)"
    } else {
    navbar.classList.remove('shadow');
    navbar.style.backgroundColor = "rgba(169, 0, 0, 0.7)"
    }
});

// Carousel
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5500,
  wrap: true,
  ride: "carousel"
})