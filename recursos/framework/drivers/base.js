function base(idCanvas, objRoom){
	this.canvas=document.getElementById(idCanvas);
	this.contexto=this.canvas.getContext('2d');

	//Dibujar Fps
	this.maxfps = 60;
	this.frameCount = 0;
    this.currentFps = 0;
    this.lastFps = new Date().getTime();
    this.drawInterval = 1000/this.maxfps;
	this.canvas.width=320;
	this.canvas.height=240;

    this.objRoom = objRoom;

    this.fps = true;

    this.delta = null;
	
	this.tiempoTranscurrido=new Date().getTime();
}

base.prototype.configurar = function(objConfig) {
    this.canvas.width  = objConfig.ancho;
    this.canvas.height = objConfig.alto;
    this.fps           = objConfig.fps;
};

base.prototype.fpsUpdate=function(){

	var delta=new Date().getTime() - this.tiempoTranscurrido;
    this.tiempoTranscurrido=new Date().getTime();
	
	var thisFrame = new Date().getTime(),
    diffTime = Math.ceil((thisFrame - this.lastFps));

    if (diffTime >= 1000){
        this.currentFps = this.frameCount;
        this.frameCount = 0.0;
        this.lastFps = thisFrame;
    }
 
    this.frameCount++;

    this.delta = delta;

};

base.prototype.dibujarFps=function(){
    if (this.fps){
    	this.contexto.save();
            this.contexto.fillStyle = 'red';
            this.contexto.font = 'bold 12px sans-serif';
            this.contexto.fillText('Fps: '+ this.currentFps, 9, 20);
        this.contexto.restore();
    }
};

base.prototype.control = function() {
    var metodo = this.objRoom.control[this.objRoom.nivel].obj;
    this.objRoom.control[this.objRoom.nivel].control(metodo);
};

base.prototype.logica = function() {
    var metodo =  this.objRoom.logica[this.objRoom.nivel].obj;
    this.objRoom.logica[this.objRoom.nivel].logica(metodo);
};

base.prototype.render = function() {
    var metodo = this.objRoom.render[this.objRoom.nivel].obj;
    this.objRoom.render[this.objRoom.nivel].render(metodo);
};

base.prototype.borrarCanvas=function(){
	this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

base.prototype.gameloop=function(){
    this.borrarCanvas();
    this.control();
    this.logica()
	this.fpsUpdate();
    this.render();
	this.dibujarFps();
};