//obj base
function bloque(ancho, alto, x, y, solido, sprite){
	this.ancho            = ancho;
	this.alto             = alto;
	this.x                = x;
	this.y                = y;
	this.solido           = solido;
	this.gravedad         = false;
	
	this.sprite           = sprite; //sprite para el personaje
	this.direccion        = "abajo"; //direccion inicial
	this.spriteindice     = 0; //animacion principal
	this.transicionSprite = 150; //tiempo para cambiar de frame
	this.transicion       = 0; // tiempo actual del sprite
}

bloque.prototype.dibujar=function(contexto){
	contexto.save();
		contexto.translate(this.x*this.ancho, this.y*this.alto);
		this.sprite.dibujar(contexto,this.ancho,this.alto,this.direccion,this.spriteindice);
	contexto.restore();
};