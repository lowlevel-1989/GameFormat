var tilePrueba;
function configurarTiles(){
	tilePrueba = new tile(cargar.getImagen('black'));
	tilePrueba.createDireccion(1,1,0,0,0,0,{"cuadrado":0});
	tiles.add("default",tilePrueba);
};