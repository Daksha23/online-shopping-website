const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuElemnt =document.getElementById('mobile-menu');

function toggleMobileMenu() {
    mobileMenuElemnt.classList.toggle('open');
}

mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);