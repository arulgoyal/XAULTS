document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const dropdownLink = document.getElementById("solutions-link");
    const dropdownMenu = document.getElementById("dropdown-menu");

    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });

    dropdownLink.addEventListener("click", function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            navMenu.classList.remove("open");
        }
        if (!dropdownLink.contains(e.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');

    dropdownToggle.addEventListener('click', function () {
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});
