jugador.prototype.control = function() {

	if(controlador.teclado[37]) //izq
		this.izquierda=true;
	else
		this.izquierda=false;

	if(controlador.teclado[38]) //arriba
		this.arriba=true;
	else
		this.arriba=false;

	if(controlador.teclado[39]) //der
		this.derecha=true;
	else
		this.derecha=false;

	if(controlador.teclado[40]) //abajo
		this.abajo=true;
	else
		this.abajo=false;
		
};
	