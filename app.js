// YOUR CODE HERE
$(document).ready(function() {
	$('.color').click(function() {
		var dateText = Date.now();
		if ($(this).attr("id") === "1") {
			$('<div>' + dateText + '</div>').css('color', $('.color')[0].style.backgroundColor).appendTo('#times');
		} else if ($(this).attr("id") === "2") {
			$('<div>' + dateText + '</div>').css('color', $('.color')[1].style.backgroundColor).appendTo('#times');
		} else if ($(this).attr("id") === "3") {
			$('<div>' + dateText + '</div>').css('color', $('.color')[2].style.backgroundColor).appendTo('#times');
		} else if ($(this).attr("id") === "4") {
			$('<div>' + dateText + '</div>').css('color', $('.color')[3].style.backgroundColor).appendTo('#times');
		} else if ($(this).attr("id") === "5") {
			$('<div>' + dateText + '</div>').css('color', $('.color')[4].style.backgroundColor).appendTo('#times');
		}
	});
});