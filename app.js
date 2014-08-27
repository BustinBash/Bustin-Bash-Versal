$(document).ready(function(){
  console.log('Welcome to our Bash Tutorial!')
  var lsm = new BustinBash.Storage.Model
  var lsc = new BustinBash.Storage.Controller(lsm)
  lsc.init();
  
  // Database
  var dbc = new BustinBash.Database.Controller
  var database = new BustinBash.Database.Model(dbc)
  database.fetch()

  // Master
  var mc = new BustinBash.Master.Controller
  mc.init();
  // mc.bindEvents()

  // Lessons
  var lv = new BustinBash.Lessons.View
  var lc = new BustinBash.Lessons.Controller(lv)
  lc.init();

  // Instruction
  var iv = new BustinBash.Instruction.View
  var ic = new BustinBash.Instruction.Controller(iv)
  ic.init()

  // Question
  var qv = new BustinBash.Question.View
  var qv = new BustinBash.Question.Controller(qv)
  qv.init()

  // Terminal
  // var tm = new Terminal.Model
  var tv = new BustinBash.Terminal.View
  var tc = new BustinBash.Terminal.Controller(tv)
  tc.init()

  // Hints
  // var hm = new Hints.Model
  var hv = new BustinBash.Hints.View
  var hc = new BustinBash.Hints.Controller(hv)
  hc.init()


  // Directory
  // var dm = new Directory.Model
  var dv = new BustinBash.Directory.View
  var dc = new BustinBash.Directory.Controller(dv)
  dc.init()


  // Title
  var tv = new BustinBash.Title.View
  var tc = new BustinBash.Title.Controller(tv)
  tc.init()
})
