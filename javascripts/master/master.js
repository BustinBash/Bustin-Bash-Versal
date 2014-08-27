BustinBash.Master.Controller = function() {
}

BustinBash.Master.Controller.prototype = {
  init: function(){
    $(document).on('getData', function(event, data) {
      this.db = data
      this.bindListeners(this.db)
      this.getLocalStorage();
      this.autoLoadFirst(this.db)
    }.bind(this)
    )
  },
  bindListeners: function(data) {
    this.masterData = data
    var self = this;

    $('.navbar').on('click', function(e) {
      self.deleteHint()
      var elementId = e.target.parentElement.id
      var id = self.masterData[elementId].ID
      this.changeLevel(id)
    }.bind(this));

    $(document).on('success', function(event, localData) {
      this.deleteHint();
      this.localData = localData()
      var self = this
      setTimeout(function(){
        self.changeLevel(self.localData.ID + 1)
      }, 1000)

    }.bind(this));
  },
  deleteHint: function(){
    $('.hints').children().first().html("")
  },

  getLocalStorage: function() {
    if (localStorage.lessons != undefined) {
      var storage = localStorage.lessons.split(',').sort()
      this.storage = storage[storage.length - 1]
    }
  },

  autoLoadFirst: function(data){
    this.masterData = data
    var level = (this.storage != "" ? this.storage : 1)
    this.changeLevel(level)
  },

  changeLevel: function(id) {
    var level = this.masterData["Lesson"+id]
    var previousLevel = this.masterData["Lesson"+ (id-1)]
    $(document).trigger('changeLevel', [level,previousLevel])

  }

}