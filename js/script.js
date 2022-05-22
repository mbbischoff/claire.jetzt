$(document).ready( function() {

	let greeting = "Hallo,";
	let hr = new Date().getHours();

	if(hr >= 6 && hr < 12) {
		/*Morning 6a->12p*/
		greeting = "Good Morning,";
	} else if (hr == 12) {
		/*Noon 12pm*/
		/*Leave Default*/
	} else if (hr > 12 && hr < 17) {
		/*Afternoon 1p->5p*/
		greeting = "Good Afternoon,";
	} else if (hr >= 17 && hr < 21) {
		/*Evening 5p->9p*/
		greeting = "Good Evening,";
	} else if (hr >= 21 || hr < 6) {
		/*Night 9p->6a*/
		/*Leave Default*/
	} else {
		/*Unknown*/
		/*Leave Default*/
	}
	$('#greeting').html(greeting);
});
