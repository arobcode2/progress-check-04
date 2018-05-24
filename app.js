// YOUR CODE HERE
$(document).ready(function() {
	$('.color').click(function() {
		var dateText = Date.now();
		for (var i = 0; i < $('.color').length; i++) {
			console.log($('.color')[i].style.backgroundColor);
			if (i === 0) {
				$('#times').css('color', $('.color')[i].style.backgroundColor);
			}
		}
		$('<div>' + dateText + '</div>').appendTo('#times');
	});
});