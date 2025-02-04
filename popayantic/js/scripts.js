// Aquí puedes agregar la lógica de tus botones o interactividad
console.log("Página cargada correctamente");


// JavaScript para alternar la clase 'show-menu' cuando se haga clic en el icono hamburguesa
document.querySelector('.hamburger-icon').addEventListener('click', function() {
    const menu = document.querySelector('nav.floating-menu2 ul');
    menu.classList.toggle('show-menu');
});