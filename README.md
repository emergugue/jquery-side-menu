# Menú lateral con jQuery
Pequeño código en jQuery para crear menús laterales en móviles

#Requerimientos de uso
Para que funcione correctamente, hay que tener en cuenta:

El contenedor del menú, debe tener las siguientes propiedades CSS: 
```css
position: fixed;
width: 60%; /*Variable, dependiendo de qué tanto espacio se desea que ocupe el menú en la pantalla*/
right: -60%; /*Depende del width*/
z-index: 3;
height: 100vh;
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
		<!-- Tu código HTML -->
	</div>
</body>
</html>
```
