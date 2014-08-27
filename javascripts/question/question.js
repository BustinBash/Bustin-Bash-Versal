// View
BustinBash.Question.View = function() {}

BustinBash.Question.View.prototype = {
  render: function(question) {
    var source   = $("#question-template").html();
    var template = Handlebars.compile(source);
    var context = {question: question}
    var text    = template(context);
    $('.question').html(text)
  }
}

// Controller
BustinBash.Question.Controller = function(view) {
  this.view = view;
}
BustinBash.Question.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function() {
    $(document).on('changeLevel', function(event, data) {
      this.displayQuestion(data.Question);
    }.bind(this));
  },
  displayQuestion: function(question) {
    this.view.render(question)
  }
}
