function tile(objImg){
	this.img=objImg; //obj de la imagen del tile
	this.filas=[];
}

tile.prototype.setDireccion=function(direccion,coordenadas){
	this.filas[direccion]=coordenadas;
};

// filas, columnas, arriba, izquierda, abajo, derecha, {"casas":3,"pasto":0,"piso":2,"pared":1}
tile.prototype.createDireccion=function(filas, columnas, ajustear,ajusteiz,ajusteab,ajustede,direcciones){
	var ancho=this.img.width/columnas;
	var alto=this.img.height/filas;
	
	for (direccion in direcciones){
		this.filas[direccion]=[];
		for (var i=0;i<columnas;i++){
			this.filas[direccion].push([i*ancho+ajusteiz,direcciones[direccion]*alto+ajustear,(i+1)*ancho-ajustede,(direcciones[direccion]+1)*alto-ajusteab]);
		}
	}
};

tile.prototype.getNumTiles=function(direccion){
	return this.filas[direccion].length;
};

tile.prototype.dibujar=function(contexto,ancho,alto,direccion,indice){
	contexto.drawImage(this.img, this.filas[direccion][indice][0],
								this.filas[direccion][indice][1], 
								this.filas[direccion][indice][2]-this.filas[direccion][indice][0], 
								this.filas[direccion][indice][3]-this.filas[direccion][indice][1],
								-ancho/2, -alto/2, ancho, alto);
};

/**
 * Esta clase es el almacén de tiles de nuestro juego.
*/
function almacenTiles(){
	//La lista de tiles
	this.lista=[];
}

almacenTiles.prototype.add=function(id,tile){
	this.lista[id]=tile;
};

almacenTiles.prototype.get=function(id){
	var dato;
	if(typeof this.lista[id] == 'undefined')
		dato = this.lista['default'];
	else
		dato = this.lista[id];
	return dato;
};