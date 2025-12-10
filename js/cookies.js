// Cookie Consent Banner - Simple Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Comprobar si el usuario ya ha aceptado las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Mostrar el banner de cookies
        document.getElementById('cookieBanner').style.display = 'block';
    }

    // Botón de aceptar cookies
    document.getElementById('acceptCookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieBanner').style.display = 'none';
    }); 

    // Botón de rechazar cookies
    document.getElementById('rejectCookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        document.getElementById('cookieBanner').style.display = 'none';
    });
});
