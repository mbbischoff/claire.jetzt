//unhide hidden elements
$('.target_TOGGLE').click(function() {
	let toggleElementId = event.target.getAttribute('linked');
	console.log(toggleElementId);
	$('#' + toggleElementId).toggle(200);
	//$('#' + toggleElementId).find('*').toggle(200);
});

$('.target_UNHIDE').click(function(event) {
	let toggleElementId = event.target.getAttribute('linked');
	console.log(toggleElementId);
	$('#' + toggleElementId).show();
	//$('#' + toggleElementId).find('*').show(200);
});

//load content from components
/*let resizeIframe = function(obj) {
	obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}*/

$(document).ready( function() {
	$("#resumeLinkFrame").load("subelements/resume.html");
	$("#footerFrame").load("subelements/footer.html");
});
