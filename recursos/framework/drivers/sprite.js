//class Sprite
function sprite(objImg){
	this.img=objImg; //obj de la imagen del sprite
	this.direcciones=[];
}

sprite.prototype.setDireccion=function(direccion,coordenadas){
	this.direcciones[direccion]=coordenadas;
};

// filas, columnas, arriba, izquierda, abajo, derecha, {"arriba":3,"abajo":0,"derecha":2,"izquierda":1}
sprite.prototype.createDireccion=function(filas, columnas, ajustear,ajusteiz,ajusteab,ajustede,direcciones){
	var ancho=this.img.width/columnas;
	var alto=this.img.height/filas;
	
	for (direccion in direcciones){
		this.direcciones[direccion]=[];
		for (var i=0;i<columnas;i++){
			this.direcciones[direccion].push([i*ancho+ajusteiz,direcciones[direccion]*alto+ajustear,(i+1)*ancho-ajustede,(direcciones[direccion]+1)*alto-ajusteab]);
		}
	}
};

sprite.prototype.getNumSprites=function(direccion){
	return this.direcciones[direccion].length;
};

sprite.prototype.dibujar=function(contexto,ancho,alto,direccion,indice){
	contexto.drawImage(this.img, this.direcciones[direccion][indice][0],
								this.direcciones[direccion][indice][1], 
								this.direcciones[direccion][indice][2]-this.direcciones[direccion][indice][0], 
								this.direcciones[direccion][indice][3]-this.direcciones[direccion][indice][1],
								-ancho/2, -alto/2, ancho, alto);
};

/**
 * Esta clase es el almacén de sprites de nuestro juego.
*/
function almacenSprites(){
	//La lista de sprites
	this.lista=[];
}

almacenSprites.prototype.add=function(id,sprite){
	this.lista[id]=sprite;
};

almacenSprites.prototype.get=function(id){
	var dato;
	if(typeof this.lista[id] == 'undefined')
		dato = this.lista['default'];
	else
		dato = this.lista[id];
	return dato;
};