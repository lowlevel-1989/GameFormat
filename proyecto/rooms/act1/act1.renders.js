act1.prototype.borde = function() {
	base.contexto.fillStyle = 'black';
    base.contexto.strokeRect(0,0,base.canvas.width,base.canvas.height);
}

act1.prototype.renders = function(metodo) {
	metodo.borde();
	metodo.pared.dibujar(base.contexto);
	metodo.jugador.dibujar(base.contexto);
};