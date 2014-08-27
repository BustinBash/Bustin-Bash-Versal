BustinBash.Player.Controller = function(player){

  player.setHeight(800)
  player.on('editableChanged', function(editableObj){
   if(editableObj.editable) {
     document.body.appendChild(document.createTextNode('author '));
   } else {
     document.body.appendChild(document.createTextNode('learner '));
   }
 });

  player.on('editableChanged', function(editableObj){
    if(editableObj.editable) {
      $('.instructions').show();
    } else {
      $('.instructions').hide();

      document.body.appendChild(document.createTextNode('learner '));
    }
  });


  // send this command to receive initial events
  player.startListening();

  // continuously watch for changes in height
  player.watchBodyHeight();
  var input = $('.instructions-input')
  input.on('blur', function(){
   player.setAttributes({
     instructions: input.val()
   });
 });
  player.on('attributesChanged', function(attrs){
   if(attrs && attrs.instructions) {
     input.value = attrs.instructions;
   }
 });


  var response = $('.response')
  response.on('blur', function(){
   player.setAttributes({
     response: response.val()
   });
 });
  player.on('attributesChanged', function(attrs){
   if(attrs && attrs.instructions) {
     response.value = attrs.response;
   }
 });

  var success = $('.success')
  success.on('blur', function(){
   player.setAttributes({
     success: success.val()
   });
 });
  player.on('attributesChanged', function(attrs){
   if(attrs && attrs.instructions) {
     success.value = attrs.success;
   }
 });

  var structure = $('.structure')
  structure.on('blur', function(){
   player.setAttributes({
    structure: structure.val()
   });
 });
  player.on('attributesChanged', function(attrs){
   if(attrs && attrs.instructions) {
    structure.value = attrs.structure;
   }
 });
}