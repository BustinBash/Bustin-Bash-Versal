BustinBash.Storage.Model = function(){
	this.lessons = []
}

BustinBash.Storage.Model.prototype = {
	loadStorage: function(){
		localStorage.setItem("lessons", this.lessons);
	}	
}
BustinBash.Storage.Controller = function(model){
	this.model = model
}

BustinBash.Storage.Controller.prototype = {
	init: function(){
		this.initStorage();
		this.bindListeners();
	},
	bindListeners: function(){
		$(document).on('success', function(event, data){
			this.addLesson(data().ID);
			this.model.loadStorage()
		}.bind(this));
	},
	addLesson: function(id){
		this.model.lessons.push(id)
	},
	initStorage: function(){
		if (localStorage.lessons != undefined){
			var lessons = localStorage.lessons.split(',')
			this.model.lessons = lessons;
		}
		this.model.loadStorage();
	}
}