/*
	Archivo LeerFont.jsx, extraído de la guía 'PS 7.0 Scripting Guide.pdf' (pág. 66)
	Cuando se trabaja con fonts en los scripts de PhotoShop hay que utilizar el nombre PostScript de la fuente
	en lugar del nombre que presenta el selector de fuentes.

	Para determinar el nombre PostScript hay que proceder como sigue:
	a) Se crea una capa de texto utilizando el tipo de fuente cuyo nombre queremos determinar
	b) Se ejecuta el script LeerFont y aparecerá un mensaje de alerta con el nombre
	c) Utilizarlo tal cual.
	
	Solamente he abierto este archivo para ver si el sistema para hacer las tareas de mi curso de Coursera es hacer un Fork de los archivos originales. Todava no entiendo la diferencia entre clonar y forkar.
	
*/

var capa = activeDocument.artLayers[0];
if (capa.kind == LayerKind.TEXT) {
		alert( "Nombre PostScript de la fuente actual:\r\n\r\n" + capa.textItem.font);
		} else { alert( "Ummm. Parece que no has leido el script....\r\nEs necesario ejecutarlo sobre una capa de texto!" ); }
capa = null;
