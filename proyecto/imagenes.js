//variables globales para estas instancias
//no son obligatorias, pero si recomendadas
var spriteJugador;

function imagenes(cargar){
	
	//agregar todas las imagenes de su proyecto a este arreglo
	cargar.imagenes = [
		{id: 'black' , 'src': 'recursos/imgs/black.png'}, // !IMPORTANTE
		{id: 'white' , 'src': 'recursos/imgs/white.png'}, // !IMPORTANTE
		{id: 'heroe' , 'src': 'recursos/imgs/prueba.png'}
	];
}

//Asignar todos los sprites
imagenes.prototype.cargadoCompletamente = function() {
	spriteJugador = new sprite(cargar.getImagen('heroe'));
	spriteJugador.createDireccion(4,4,9,15,5,15,{"arriba":3,"abajo":0,"derecha":2,"izquierda":1});
	sprites.add("jugador",spriteJugador);
}