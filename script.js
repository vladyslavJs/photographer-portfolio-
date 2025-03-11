// // Відкриваємо мобільне меню
const mobileMenu = document.getElementById("mobile-menu");
const openMenuBtn = document.querySelector(".open-mobile-menu-btn");
const closeMenuBtn = document.getElementById("mobile-menu-close-btn");

openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});


