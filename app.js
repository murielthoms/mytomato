var totalSecondes = 1500;
var totalSecondes2 = 600;
var totalSecondes3 = 300;
var interval;
var demarrer;

$('#pomodoro').on('click', function(){
	return pomodoro();
});

$('#pauseCourte').on('click',function(){
	return pauseCourte();
});

$('#pauseLongue').on('click',function(){
	return pauseLongue();
});

$('#demarrer').on('click', function() {

});


function pauseCourte() {
	var interval = setInterval(function() {

		$('#minutes').text(ajouterZero(Math.floor(300 / 60)));
		$('#secondes').text(ajouterZero(Math.floor(300 % 60)));
		totalSecondes --;

		if(totalSecondes < 0){
			clearInterval(interval);

		}
	}, 1000);
};

function pomodoro() {
	var interval = setInterval(function() {
		$('#minutes').text(Math.floor( totalSecondes / 60));
		$('#secondes').text(ajouterZero(Math.floor(totalSecondes % 60)));
		totalSecondes --;

		if(totalSecondes < 0){
			clearInterval(interval);
			
		}
	}, 1000);
};

function pauseLongue() {
	var interval = setInterval(function() {

		$('#minutes').text(ajouterZero(Math.floor(totalSecondes2 / 60)));
		$('#secondes').text(ajouterZero(Math.floor(totalSecondes2 % 60)));
		totalSecondes --;

		if(totalSecondes2 < 0){
			clearInterval(interval);
			
		}
	}, 1000);
};



function ajouterZero(nombre) {
	if (nombre < 10 ) {
		nombre = '0' + nombre;
	}
	return nombre;
};