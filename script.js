//http://lorempixel.com/image_output/animals-q-c-200-141-10.jpg
//http://lorempixel.com/image_output/animals-q-c-208-167-8.jpg

$(function () {
	$('li.menuBTN').click(function () {
		$('li.menuItem').toggle('display');
	});

	
	//super rotate helicopter-dick
	var angle = 0;
	var maxAngle = 10;
	var minAngle = -10;
	var speed = 30;
	var step = 1;
	var direction = true;
	setInterval(function () {
		if (direction) {
			angle += step;
		} else {
			angle -= step;
		}
		if (angle == maxAngle && direction) {
			direction = false;
		}
		if (angle == minAngle && !direction) {
			direction = true;
		}
		$('.randomTekst').css('transform', 'rotate(' + angle + 'deg)');

	}, speed);
});