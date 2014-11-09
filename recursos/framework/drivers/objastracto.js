//obj animado, hereda del obj bloque
//soporta 4 direcciones, arriba, abajo, izquierda y derecha
function objAstracto(ancho, alto, x, y, sprite){
	
	bloque.call(this, ancho, alto, x, y, false, sprite);

	this.dx               = 0; //direccion x
	this.dy               = 0; //direccion y
	
	this.velocidad        = 0.003; //velocidad
}

objAstracto.prototype= Object.create(bloque.prototype);

objAstracto.prototype.posicionValida=function(){
	return false;
};

objAstracto.prototype.mover=function(delta){
	var nuevaDireccion = "";
	if (this.dx==0 && this.dy==0) return;
	var px=this.x+this.dx*this.velocidad*delta;
	var py=this.y+this.dy*this.velocidad*delta;
	if (this.posicionValida(px,this.y)) px=this.x;
	if (this.posicionValida(this.x,py)) py=this.y;
	if (this.x==px && this.y==py) return;
	
	this.x = px;
	this.y = py;
	
	if (this.dx>0){
		nuevaDireccion="derecha";
	}
	if (this.dx<0){
		nuevaDireccion="izquierda";
	}
	if (this.dy>0){
		nuevaDireccion="abajo";
	}
	if (this.dy<0){
		nuevaDireccion="arriba";
	}
	if (this.direccion!=nuevaDireccion){
		this.transicion=0;
		this.spriteindice=0;
		this.direccion=nuevaDireccion;
	}
	this.transicion+=delta;
	if (this.transicion>this.transicionSprite){
		this.transicion=0;
		this.spriteindice=(this.spriteindice+1)%this.sprite.getNumSprites(nuevaDireccion);
	}


};