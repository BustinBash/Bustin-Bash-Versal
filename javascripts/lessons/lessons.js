//------- View -----------
BustinBash.Lessons.View = function() {}

BustinBash.Lessons.View.prototype = {

  render: function(lesson, title) {
    var source   = $("#lessons-template").html();
    var template = Handlebars.compile(source);
    var context = {lesson: lesson, title: title}
    var text    = template(context);
    this.updateDOM(text)
  },

  renderSuccessButton: function(id){
    if (id >= 1){
      $('#Lesson' + id + " img")[0].src = "images/terminal_success.png"
    }
  },

  updateDOM: function(text) {
    $('#navbar_popup').append(text)
  }
}

//----- Controller -------

BustinBash.Lessons.Controller = function(view) {
  this.view = view;
}

BustinBash.Lessons.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },

  bindListeners: function() {
    $(document).on('getData', function(event, data) {
      this.getLocalStorage();
      this.createNavigationButtons(data);
    }.bind(this));
    $(document).on('success', function(event, data){
      this.getLocalStorage();
      this.replaceButton(data().ID);
    }.bind(this));
  },

  createNavigationButtons: function(data) {
    for (lesson in data) {
      this.view.render(lesson, data[lesson].Title)
    }

    if (this.completedLessons != undefined){
      this.completedLessons.forEach(function(number){
        this.replaceButton(number);
      }.bind(this));
    }
  },

  getLocalStorage: function(){
    if (localStorage.lessons != undefined) {
      this.completedLessons = localStorage.lessons.split(',').sort();
    }
  },

  replaceButton: function(id) {
    this.view.renderSuccessButton(id)
  }
}
