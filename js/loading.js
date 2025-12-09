document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        // Ocultar el overlay después de 6 segundos (duración de la animación original)
        setTimeout(function() {
            loadingOverlay.style.opacity = '0';
            setTimeout(function() {
                loadingOverlay.style.display = 'none';
            }, 1500); // Tiempo de la transición
        }, 500);
    }
});