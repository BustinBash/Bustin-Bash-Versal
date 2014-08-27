$(document).ready(function(){
  // Database

  // Master
  var player = new VersalPlayerAPI();

  // Terminal
  // var tm = new Terminal.Model
  var tv = new BustinBash.Terminal.View
  var tc = new BustinBash.Terminal.Controller(tv, player)
  tc.init()

  // Directory
  // var dm = new Directory.Model
  var dv = new BustinBash.Directory.View
  var dc = new BustinBash.Directory.Controller(dv)
  dc.init()

  // Player
  var pc = new BustinBash.Player.Controller(player)
})
