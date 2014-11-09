function pared(ancho, alto, x, y){
	bloque.call(this, ancho, alto, x, y, true, sprites.get("pared"));
}

pared.prototype = Object.create(bloque.prototype);