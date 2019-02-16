$(document).ready(function() {	
	$("#batteryLow").click(function() {
		$("body").addClass('lowBatScreen');
		$("#oppyFade").fadeOut();
		$("#heading").text( "My battery is low, it's getting dark");
		$("h4").addClass("red");
	});

	$("#bringHerBack").click(function() {
		$("body").removeClass('lowBatScreen');
		$("#oppyFade").fadeIn();
		$("#heading").text( "Hello, my name is Oppy!");
		$("h4").removeClass("red");

	})
});