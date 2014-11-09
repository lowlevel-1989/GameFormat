//clase controladora del evento teclado
function controlador(){
	this.teclado = {};
    this.elementoControl();
}

controlador.prototype.elementoControl = function() {

    self = this;
    this.agregarEvento(document,"keydown",function(e){
        //se coloca true la tecla presionada
        self.teclado[e.keyCode] = true;
        e.preventDefault();
    });

    this.agregarEvento(document,"keyup",function(e){
        //se coloca false al soltar la tecla
        self.teclado[e.keyCode] = false;
    });
};

controlador.prototype.agregarEvento = function(elemento, nombreEvento, funtion) {
    if(elemento.addEventListener){
        //navegadores de verdad
        elemento.addEventListener(nombreEvento, funtion, false);
    }else if(elemento.attachEvent){
        //internet explorer xD...
        elemento.attachEvent(nombreEvento, funtion, false);
    }
};