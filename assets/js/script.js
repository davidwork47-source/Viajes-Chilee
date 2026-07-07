// Espera a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Activar Tooltips Bootstrap
    // ==========================

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ==========================
    // Formulario de contacto
    // ==========================

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("¡Gracias por contactarnos! Nos comunicaremos contigo muy pronto.");

        formulario.reset();

    });

});

// ==========================
// Cambiar color de la Navbar
// ==========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("bg-info");

    } else {

        navbar.classList.remove("bg-info");

    }

});