jugador.prototype.mover=function(delta){
	this.dx = 0;
	this.dy = 0;
	if (this.arriba){
		this.dy-=1;
	}
	if (this.abajo){
		this.dy+=1;
	}
	if (this.izquierda){
		this.dx-=1;
	}
	if (this.derecha){
		this.dx+=1;
	}
	objAstracto.prototype.mover.call(this,delta);
};
	