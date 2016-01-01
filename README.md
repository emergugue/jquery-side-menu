# Menú lateral con jQuery
Pequeño código en jQuery para crear menús laterales de un sólo nivel en móviles

## Requerimientos de uso
Para que funcione correctamente, hay que tener en cuenta:

El menú (en este ejemplo es #primary-menu), debe tener las siguientes propiedades CSS: 
```css
#primary-menu{
	position: fixed;
	width: 60%; /*Variable, dependiendo de qué tanto espacio se desea que ocupe el menú en la pantalla*/
	right: -60%; /*Depende del width*/
	z-index: 3;
	height: 100vh;
}
```

En la función hideMenu(), se debe cambiar el valor de la propiedad "right", según el ancho del menú configurado en el CSS
```javascript
function hideMenu(){
	overlay.detach();
	menu.animate({
		right: "-60%"},
		500);
	btnClose.detach();
}
```

El código HTML de tu pagína, debe estar dentro de un contenedor. En este ejemplo, está en un contenedor con id #page
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Menú lateral con jQuery</title>
</head>
<body>
	<div id="page">
		<header>
			<button class="menu-toggle">Ver menú</button>
			<nav>
				<ul class="primary-menu">
					<li><a href="#">Inicio</a></li>
				</ul>
			</nav>
		</header>
		<div class="content">
			<!-- El HTML de tu contenido -->
		</div>
		<footer>
			<!-- El HTML de tu footer -->
		</footer>
	</div>
</body>
</html>
```

Este código está pensando para que trabaje bajo la metodología Mobile First, por lo tanto deberás ajustar tu hoja de estilos para que funcione correctamente en las diferentes resoluciones, de acuerdo a la planeación de tu proyecto. 
