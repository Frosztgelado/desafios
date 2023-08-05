const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!targetElement.matches('.menu-icon') && !targetElement.closest('.nav-links')) {
        navLinks.classList.remove('show');
    }
});
