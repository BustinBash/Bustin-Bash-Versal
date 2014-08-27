$(document).ready(function(){
  // Database

  // Master
  var mc = new BustinBash.Master.Controller
  mc.init();
  // mc.bindEvents()

  // Terminal
  // var tm = new Terminal.Model
  var tv = new BustinBash.Terminal.View
  var tc = new BustinBash.Terminal.Controller(tv)
  tc.init()

  // Directory
  // var dm = new Directory.Model
  var dv = new BustinBash.Directory.View
  var dc = new BustinBash.Directory.Controller(dv)
  dc.init()
})
