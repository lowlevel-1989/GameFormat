//clase madejadora de rooms
function room(){
	//controladores de los rooms
	this.control = [];
	//logicas de los rooms
	this.logica  = [];
	//render de los rooms
	this.render  = [];
	//room actual
	this.nivel = 0;
}

//no permite crear dos objetos room con el mismo nombre
room.prototype.validar = function(objRoom) {
	var recorrido = this.control.length;
	for (var i = 0; i < recorrido; i++) {
		if (this.control[i].obj.nombre == objRoom.nombre)
			return false;
	};
	return true;
}

//asigna todos los metodos del room
room.prototype.setRoom = function(objRoom) {
	if (this.validar(objRoom)){
		this.control.push({
			obj: objRoom,
			control: objRoom.controles
		});
		this.logica.push({
			obj: objRoom,
			logica: objRoom.logicas
		});
		this.render.push({
			obj: objRoom,
			render: objRoom.renders
		});
	}
};

//nivel siguiente
room.prototype.siguiente = function() {
	if (this.nivel < (this.control.length-1))
		this.nivel++;
};

//nivel anterior
room.prototype.anterior = function() {
	if (this.nivel > 0)
		this.nivel--;
};