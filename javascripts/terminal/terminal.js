
BustinBash.Terminal.View = function() {
  this.input = $("iframe").contents().find("#terminal-input").val()
}

BustinBash.Terminal.View.prototype = {
  renderSuccess: function(value, input) {
    var source   = $("#terminal-success-template").html();
    var template = Handlebars.compile(source);
    var context  = {success: "Right answer"}
    var text     = template(context);
    this.updateDOM(text);
  },

  renderError: function() {
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
      console.log($(this))
      this.checkInput()
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
  checkInput: function() {
    // debugger
    console.log(this.input)
    if(this.input === this.answer) {
      $(document).trigger('success', function() {
        return this.data;
        alert("done")
      }.bind(this));
      this.view.renderSuccess()
    } else if(this.input === 'ls') {
      this.view.renderLS(this.data.Branches)
    } 
    else {
      this.view.renderError()
    }
  },
  focusInput: function(){
    $('#terminal-input').focus();
  }
}

