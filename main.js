
// document.addEventListener('DOMContentLoaded', function () {
//     const menuToggle = document.getElementById('menu-toggle');
//     const menuItems = document.querySelector('.topbox div');
//     const burgerIcon = document.querySelector('.burger-icon');
//
//     function toggleMenu() {
//         const isOpen = menuToggle.checked;
//         document.body.style.overflow = isOpen ? 'hidden' : 'auto';
//         menuItems.style.display = isOpen ? 'flex' : 'none';
//         burgerIcon.classList.toggle('cross', isOpen);
//     }
//
//     function closeMenu() {
//         menuToggle.checked = false;
//         toggleMenu();
//     }
//
//     menuToggle.addEventListener('change', toggleMenu);
//
//     menuItems.addEventListener('click', closeMenu);
//
//     burgerIcon.addEventListener('click', function () {
//         toggleMenu();
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.querySelector('.topbox div');
    const burgerIcon = document.querySelector('.burger-icon');

    function toggleMenu() {
        const isOpen = menuToggle.checked;
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        menuItems.style.display = isOpen ? 'flex' : 'none';
        burgerIcon.classList.toggle('cross', isOpen);
    }

    function closeMenu() {
        menuToggle.checked = false;
        toggleMenu();
    }

    function handleWindowSize() {
        const screenWidth = window.innerWidth;

        // Тут можна вказати ширину екрану, при якій виконувати деякі дії
        if (screenWidth <= 768) {
            // Додаткові умови або дії, які мають відбутися на екранах ширше 768px
            // Наприклад, можна додати обробку кліків на іконку бургера та інше
            menuToggle.addEventListener('change', toggleMenu);
            menuItems.addEventListener('click', closeMenu);
            burgerIcon.addEventListener('click', toggleMenu);
        } else {
            // Якщо екран менше 768px, можна видалити обробники подій чи виконати інші дії
            menuToggle.removeEventListener('change', toggleMenu);
            menuItems.removeEventListener('click', closeMenu);
            burgerIcon.removeEventListener('click', toggleMenu);
        }
    }

    // Викликати функцію при завантаженні сторінки
    handleWindowSize();

    // Додати обробник подій для вікна, який буде викликатися при зміні розміру екрану
    window.addEventListener('resize', handleWindowSize);
});


