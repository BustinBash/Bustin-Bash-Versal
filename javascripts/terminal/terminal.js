
BustinBash.Terminal.View = function() {
}


BustinBash.Terminal.View.prototype = {
  // inputValue: function(){
  //   return $("iframe").contents().find("#terminal-input").val()  
  // },

  renderSuccess: function(value) {
    var source   = $("#terminal-success-template").html();
    var template = Handlebars.compile(source);
    var context  = {success: value}
    var text     = template(context);
    this.updateDOM(text);
  },

  renderError: function(value) {
    var source   = $("#terminal-error-template").html();
    var template = Handlebars.compile(source);
    var context  = {error: "Oops! You didn't type in the correct response"}
    var text     = template(context);
    this.updateDOM(text);
  },

  renderLS: function(branches){
    branches.forEach(function(branch){
      $('.feed').append("<div>" + branch + "</div>")
    });
    $('input').val("");
    $('.feed').scrollTop($('.feed')[0].scrollHeight);
  },
  updateDOM: function(text) {
    debugger
    $('.feed').append(text)
    $('input').val("");
    $('.feed').scrollTop($('.feed')[0].scrollHeight);
  }
}

BustinBash.Terminal.Controller = function(view, player) {
  this.player = player
  this.view = view;
}

BustinBash.Terminal.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function() {
    this.player.on('attributesChanged', function(attrs){
      this.storeData(attrs)
    }.bind(this));
    $('.terminal').keypress(function(e) {
     if (e.which === 13) {
      var input = e.target.value
      this.checkInput(input)
    }
  }.bind(this));
    $('.terminal').on('click', function(e){
      this.focusInput();
    }.bind(this));
  },
  storeData: function(data){
    this.answer = data.response
    this.success = data.success
  },
  checkInput: function(input) {
    // debugger
    if(input === this.answer) {
      this.view.renderSuccess(this.success) 
    } else if(this.input === 'ls') {
      this.view.renderLS(this.data.Branches)
    } 
    else {
      this.view.renderError(this.success)
    }
  },
  focusInput: function(){
    $('#terminal-input').focus();
  }
}

