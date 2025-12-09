// detalle-coche.js - Script para cargar detalles del coche basado en el parámetro 'id'

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    let carId = urlParams.get('id');

    // Si no hay id, mostrar el primer modelo por defecto (Aurion Veloce)
    if (!carId) {
        carId = 'modelo-a';
    }

    // Datos de los coches
    const carsData = {
        'modelo-a': {
            title: 'Aurion Veloce',
            description: 'L\'Aurion Veloce és el nostre model d\'entrada, dissenyat per oferir un equilibri perfecte entre rendiment i accessibilitat. Elegància i esportivitat en estat pur.',
            price: '39.900€',
            image: 'img/car1.png',
            specs: {
                motor: '2.0L Turbo',
                potencia: '250 CV',
                accel: '6.5s',
                maxSpeed: '240 km/h'
            }
        },
        'modelo-b': {
            title: 'Aurion Tempest',
            description: 'L\'Aurion Tempest ofereix un rendiment superior amb tecnologia avançada. Una força de la natura al vostre servei, ideal per als amants de la velocitat pura.',
            price: '62.500€',
            image: 'img/car2.png',
            specs: {
                motor: '3.0L V6 Turbo',
                potencia: '400 CV',
                accel: '4.2s',
                maxSpeed: '280 km/h'
            }
        },
        'modelo-c': {
            title: 'Aurion Apex',
            description: 'L\'Aurion Apex és la joia de la corona, la cúspide de l\'excel·lència automobilística. Tecnologia de Fórmula 1, luxe incomparable i prestacions extraordinàries.',
            price: '129.000€',
            image: 'img/car3.png',
            specs: {
                motor: '4.0L V8 Hybrid',
                potencia: '600 CV',
                accel: '3.0s',
                maxSpeed: '320 km/h'
            }
        }
    };

    const car = carsData[carId];
    if (!car) {
        document.getElementById('titol-cotxe').textContent = 'Cotxe no trobat';
        document.getElementById('descripcio-cotxe').textContent = 'El model especificat no existeix.';
        return;
    }

    // Llenar los elementos
    document.getElementById('imatge-cotxe').src = car.image;
    document.getElementById('imatge-cotxe').alt = car.title;
    document.getElementById('titol-cotxe').textContent = car.title;
    document.getElementById('descripcio-cotxe').textContent = car.description;
    document.getElementById('preu-cotxe').textContent = car.price;

    // Especificaciones
    const table = document.querySelector('.table tbody');
    table.innerHTML = `
        <tr>
            <th scope="row" class="text-secondary w-50">Motor</th>
            <td>${car.specs.motor}</td>
        </tr>
        <tr>
            <th scope="row" class="text-secondary">Potència</th>
            <td>${car.specs.potencia}</td>
        </tr>
        <tr>
            <th scope="row" class="text-secondary">0-100 km/h</th>
            <td>${car.specs.accel}</td>
        </tr>
        <tr>
            <th scope="row" class="text-secondary">Velocitat Màx.</th>
            <td>${car.specs.maxSpeed}</td>
        </tr>
    `;

    // Inicializar AOS
    AOS.init();
});
