var btnMenu = $(".menu-toggle"); //Botón que va a disparar la acción de mostrar el menú
var menu = $("#primary-menu"); //Contenedor del menu
var page = $("#page"); //Contenedor que agrupa todo el HTML de la página. Se utiliza para poder crear el overlay
var overlay = $("<div class='overlay'></div>"); // Capa para oscurecer el contenido
var btnClose = $("<div class='btn-cerrar'>X</div>"); //Botón para cerrar el menú

//Función para mostrar el menú
function showMenu(){
	overlay.appendTo(page);
	menu.animate({
		right: 0},
		500);
	btnClose.appendTo(menu).fadeIn("slow");
}
//Función para esconder el menú
function hideMenu(){
	overlay.detach();
	menu.animate({
		right: "-60%"},
		500);
	btnClose.detach();
}

//Mostrar el menú cuando se dé click en el botón
btnMenu.on('click', function () {
	event.preventDefault();
	showMenu();
})

//Cerrar el menú, cuando se dé click por fuera de él
overlay.on('click', function() {
	event.preventDefault();
    hideMenu();
})

//Cerrar el menú cuando se dé click en el botón de cerrar
btnClose.on('click', function() {
    event.preventDefault();
    hideMenu();
})
