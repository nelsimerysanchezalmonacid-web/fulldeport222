document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa Desplegable para Móviles
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav');
    const iconoMenu = menuToggle ? menuToggle.querySelector('.icono-menu') : null;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                if (iconoMenu) iconoMenu.textContent = '✕';
            } else {
                if (iconoMenu) iconoMenu.textContent = '☰';
            }
        });

        // Cerrar menú al hacer clic en cualquier enlace de navegación
        document.querySelectorAll('.nav a').forEach(enlace => {
            enlace.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (iconoMenu) iconoMenu.textContent = '☰';
            });
        });
    }
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbyQPKHmggjhj2agmrf50kf6NwPLYg7KJM5HEEEzvlpxzGA9kR2-N8kNvnSSGlUPEIVy/exec'; // <--- Reemplaza esto con la URL larga que te dio Google Apps Script al desplegar
const form = document.querySelector('#form-mayorista'); // Asegúrate de que tu form tenga id="form-mayorista"
const btnSubmit = document.querySelector('#btn-enviar');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Enviando solicitud...';

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                alert('¡Registro exitoso! Un asesor de Full Depor se comunicará contigo pronto.');
                form.reset();
                btnSubmit.disabled = false;
                btnSubmit.textContent = 'Solicitar Catálogo y Precios';
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Hubo un error al enviar. Por favor, intenta de nuevo.');
                btnSubmit.disabled = false;
                btnSubmit.textContent = 'Solicitar Catálogo y Precios';
            });
    });
}