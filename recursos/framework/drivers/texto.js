//class texto beta
function texto(ancho){

    this.texto           = null;
    this.contexto        = null;
    
    this.caracterInicial = null; // Carácter por el que empezar
    this.posLinea        = null; // Línea en la que nos encontramos.
    this.nLineas         = ancho; // Número de caracteres por línea.
    this.altoLinea       = 14; // Alto de cada línea.

}

texto.prototype.restablecer = function() {
    this.caracterInicial = 0; // Carácter por el que empezar
    this.posLinea        = 3; // Línea en la que nos encontramos.
};

texto.prototype.addTexto = function(texto) {
	this.texto = texto;
};

texto.prototype.dibujar = function(ctxCanvas) {
    this.contexto = ctxCanvas;
    this.restablecer();
    var tamanho = this.texto.length;
    var str;
    this.contexto.save();
        this.contexto.fillStyle = 'chocolate';
        this.contexto.font = 'bold 12px sans-serif';

        while (this.caracterInicial < tamanho){
            str = this.texto.substr(this.caracterInicial,this.nLineas);
            this.caracterInicial += this.nLineas;
            this.contexto.fillText(str, 10, this.altoLinea*this.posLinea++);
        }

    this.contexto.restore();

};