//Mapa de open streetview
let map = L.map('map').setView([2.442119, -76.608155], 17)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([2.442119, -76.608155]).addTo(map).bindPopup("Fundación Universitaria de Popayán")
L.marker([2.441821, -76.606327]).addTo(map).bindPopup("Parque Caldas").openPopup()