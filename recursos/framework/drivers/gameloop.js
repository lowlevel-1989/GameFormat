//variables globales principales y privadas
var base; //para la instancia del nuclo del framework
var carga; //para la instancia del loading
var sprites; //almacen de sprites
var tiles; //almacen de tiles
var controlador; //instancia del controlador -> mando del juego
//funcion creada en el archivo tuproyecto/imagenes.js
var imagenes; //Controla las imagenes utilizadas en el juego
var room; //Controla los room

window.onload=function(){

	cargar = new cargando;
	//carga al loading las imaganes configuradas para el proyecto
	imagenes = new imagenes(cargar);

	//cuando cargan todas las imagenes
	cargar.completado=function(){
		//Estas clases estan ubicadas en sprite.js y tile.js 
		sprites = new almacenSprites();
		tiles = new almacenTiles();

		//funcion creada en el archivo rooms/tiles.js
		//aun esta en BETA terminar
		new configurarTiles();

		//Sprite Default
		spriteDefault = new sprite(this.getImagen('black'));
		spriteDefault.createDireccion(1,1,0,0,0,0,{"arriba":0,"abajo":0,"derecha":0,"izquierda":0});
		sprites.add("default",spriteDefault);

		//funciona pensada para asignar todos los Sprites
		imagenes.cargadoCompletamente();

		//inicio al nucleo ya cargado GAMELOOP
		gameStart();
	}

	//inicia el proceso de loading
	cargar.start();
};


function gameStart(){

	// Creando GameLoop {
	var getRequestAnimationFrame = function () {
		return window.requestAnimationFrame ||
			   window.webkitRequestAnimationFrame ||
			   window.mozRequestAnimationFrame ||
			   window.oRequestAnimationFrame ||
			   window.msRequestAnimationFrame ||
			   function ( callback ){
					window.setTimeout(enroute, base.getdrawInterval());
			   };
	};

	room = new room();
	base  = new base('app', room);
	//funcion creada en el archivo tuproyecto/config.js
	base.configurar(new config);
	//se asigna el room principal
	room.setRoom(new intro());
	controlador = new controlador();

	var fpAnimationFrame = getRequestAnimationFrame();
	var gameLoop = function () {
		base.gameloop();
		fpAnimationFrame(gameLoop);
	};

	fpAnimationFrame(gameLoop);
	// Termino GameLoop } 
}