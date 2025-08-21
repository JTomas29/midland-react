window.addEventListener('load', function() {
    // Mostrar el cartel a los 2 segundos
    setTimeout(function() {
        const cartel = document.getElementById('socio-cartel');
        cartel.style.display = 'block';

        // Ocultarlo 
        setTimeout(function() {
            cartel.style.display = 'none';
        }, 10000);

    }, 2000);
});