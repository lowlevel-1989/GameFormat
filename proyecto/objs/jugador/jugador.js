function jugador(ancho, alto, x, y){
	objAstracto.call(this, ancho, alto, x, y, sprites.get("jugador"));
	this.arriba    = false;
	this.abajo     = false;
	this.derecha   = false;
	this.izquierda = false;
}

jugador.prototype = Object.create(objAstracto.prototype);
	