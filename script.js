//http://lorempixel.com/image_output/animals-q-c-200-141-10.jpg
//http://lorempixel.com/image_output/animals-q-c-208-167-8.jpg

$(function () {
    //mobile menu :V
	$('li.menuBTN').click(function () {
		$('li.menuItem').toggle('display');
	});

	var _main = $('#load').html();

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
    
    //slider 
    function slider(){
        $('#slider #d1').fadeIn(500);
        $('#slider #d1').delay(2500).hide("slide", {direction:"left"}, 500);
        
        var sizeOimg = $("#slider img").size();
        var count = 2;
        
        setInterval(function(){
            $("#slider #d"+count).show("slide",{direction:"right"}, 500);
            $("#slider #d"+count).delay(2500).hide("slide", {direction:"left"}, 500);
            
            if(count == sizeOimg){
                count = 1;
            }else{
                count++;
            }
        }, 3500);
    }
    
    $('body').ready(slider());
});