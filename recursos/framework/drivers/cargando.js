function cargando(){
	this.preloader = new createjs.LoadQueue();
	this.preloader.on("fileload", this.cargaCompleta, this);
	this.preloader.on("complete", this.progresoCarga, this);

	this.imagenes = null;
}

cargando.prototype.start = function() {
	var imagen;

	while(this.imagenes.length > 0){
		imagen = this.imagenes.shift();
		this.preloader.loadFile(imagen);
	}
	
};

//aun no esta configurado en el framework
cargando.prototype.cargaCompleta = function(objImg) {
	//cada vez que carga un archivo
	//console.log(objImg.result.src);
};


cargando.prototype.progresoCarga = function() {
	var cargado = parseInt(this.preloader.progress*100);
	$("#loading").text(cargado + '%');
	if (this.preloader.progress)
		this.completado();
};


cargando.prototype.getImagen = function(id) {
	return this.preloader.getResult(id);
};

cargando.prototype.completado = function() {};