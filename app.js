(function() {
	app = {
		interval: null,
		timerSecondes: null,
		defaultTimerSecondes: 3600,
		init: function() {
			app.listeners();
		},

		listeners: function(){
			$('#pomodoro').on('click', app.pomodoro);
			$('#pauseCourte').on('click', app.pauseCourte);
			$('#pauseLongue').on('click', app.pauseLongue);
			$('#demarrer').on('click', app.demarrer);
			$('#stop').on('click', app.stop);
			$('#reinitialiser').on('click', app. reinitialiser);
		},

		pomodoro: function(){
			app.timerSecondes = 1500;
			app.updateView();
			app.demarrer();
		},

		pauseCourte: function(){
			app.timerSecondes = 300;
			app.updateView();
			app.demarrer();
			
		},

		pauseLongue: function(){
			app.timerSecondes = 600;
			app.updateView();
			app.demarrer();
		},

		decrement: function(){
			app.timerSecondes--;
			app.updateView();

			if(app.timerSecondes === 0){
				app.stop();
			}


		},

		demarrer: function(){

			app.stop();	
			app.interval = setInterval(app.decrement, 1000);
		},

		

		stop: function(){
			clearInterval(app.interval);

		},

		reinitialiser: function(){
			app.timerSecondes = app.defaultTimerSecondes;
			app.demarrer();

		},

		updateView: function(){

			var minutes =parseInt(app.timerSecondes / 60 ,10);
			var secondes = parseInt(app.timerSecondes % 60, 10);
			$('#minutes').html(app.addZero(minutes));
			$('#secondes').html(app.addZero(secondes));
		},

		addZero: function(nombre){
			if (nombre < 10) {
				nombre = '0' + nombre;
			}
			return nombre;

		},
	};
	app.init();
})();
















