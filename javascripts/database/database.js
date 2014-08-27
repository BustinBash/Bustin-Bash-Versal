BustinBash.Database.Model = function(controller) {
  this.fetch = function(){
    $.ajax({
      url: 'http://bustinbash-api.herokuapp.com/',
      type: 'GET',
    }).done(function(data){
      controller.run(data)
    });
  }
}


BustinBash.Database.Controller = function() {
    this.run = function(data) {
      $(document).trigger('getData', data)
    }
  }