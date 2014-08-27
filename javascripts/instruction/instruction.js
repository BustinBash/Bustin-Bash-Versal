BustinBash.Instruction.View = function() {}

BustinBash.Instruction.View.prototype = {
  render: function(instructions){
    var source   = $("#instruction-template-script").html();
    var template = Handlebars.compile(source);
    var context = {instruction: instructions}
    var text    = template(context);
    $('#instruction-template').html(text)
  }
}

// Controller
BustinBash.Instruction.Controller = function(view) {
  this.view = view;
}

BustinBash.Instruction.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function() {
    $(document).on('changeLevel', function(event, data) {
      this.displayInstructions(data.Instructions)
    }.bind(this))
  },
  displayInstructions: function(instructions) {
    this.view.render(instructions)
  }
}