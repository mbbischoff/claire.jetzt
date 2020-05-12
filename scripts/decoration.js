$(document).ready( function() {

	let greeting;
	let hr = new Date().getHours();

	if(hr >= 6 && hr < 12) {
		/*Morning 6a->12p*/
		greeting = "Good Morning";
	} else if (hr == 12) {
		/*Noon 12pm*/
		greeting = "Good Day";
	} else if (hr > 12 && hr < 18) {
		/*Afternoon 1p->6p*/
		greeting = "Good Afternoon";
	} else if (hr >= 18 && hr < 21) {
		/*Evening 6p->9p*/
		greeting = "Good Evening";
	} else if (hr >= 21 || hr < 6) {
		/*Night 9p->6a*/
		/*Leave Default*/
	} else {
		/*Unknown*/
		/*Leave Default*/
	}

	document.getElementById('greeting').innerHTML = greeting;
});

/*$(window).scroll(function(){
	//console.log('scroll');
	$('a').css('color', ''); //Random Color
});*/
