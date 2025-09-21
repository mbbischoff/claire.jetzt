$(document).ready( function() {

	let greeting = "Hallo,";
	let hr = new Date().getHours();

	if(hr >= 6 && hr < 12) {
		greeting = "Good Morning,";
	} else if (hr == 12) {
		/*Leave Default*/
	} else if (hr > 12 && hr < 17) {
		greeting = "Good Afternoon,";
	} else if (hr >= 17 && hr < 21) {
		greeting = "Good Evening,";
	} else if (hr >= 21 || hr < 6) {
		/*Leave Default*/
	} else {
		/*Unknown, Leave Default*/
	}
	$('#greeting').html(greeting);

	let icons = ['CV','☀','♡','⌘','↪','℅','⏻'];

	$('#roundel').mouseover(function() {
		let rand = Math.floor(Math.random() * icons.length);
		$('#roundel').html(icons[rand]);
	});

	$(function () {
		let returntext = ''
		$('#return').hover(function() {
			returntext = $('#return').html();
			$('#return').html('↪');
		}, function() {
			$('#return').html(returntext);
		})
	});
});
