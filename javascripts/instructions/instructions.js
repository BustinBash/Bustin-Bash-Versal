$(document).ready(function(){
	$('.instructions-input').on('blur', function(e){
		var instructions = $('.instructions-input').val();
		$('.instructions-hard').text(instructions)
	});

	$('.response').on('blur', function(e){
		answer = $('.response').val();
	})
})