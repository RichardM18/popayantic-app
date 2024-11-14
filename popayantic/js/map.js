function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 2.444945317615228, lng: -76.61479758692566 },
        zoom: 13,
        mapId: 'POP_MAP_ID',
    });

    const markers = [
        { position: { lat: 2.442017826208325, lng: -76.60643914128514 }, title: "Parque Caldas" },
        { position: { lat: 2.4433313258785936, lng: -76.60849116977074 }, title: "Iglesia San Francisco" }
    ];

    markers.forEach(markerData => {
        new google.maps.Marker({
            position: markerData.position,
            map,
            title: markerData.title,
        });
    });
}

// Reiniciar el mapa cada vez que se muestre la pagina de nuevo
window.addEventListener('pageshow', initMap);
