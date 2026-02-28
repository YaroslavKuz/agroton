import '/src/sass/style.scss';

// Burger Menu Toggle
const burgerBtn = document.getElementById('burgerBtn');
const headerMenu = document.querySelector('.header__menu');

if (burgerBtn) {
    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });

    // Закриття меню при клику на пункт
    const menuItems = document.querySelectorAll('.header__menu-items');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            burgerBtn.classList.remove('active');
            headerMenu.classList.remove('active');
        });
    });
}