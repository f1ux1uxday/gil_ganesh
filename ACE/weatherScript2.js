$(document).ready(function(){

	var tabulate = function(data){

				var weatherType = data.weather[0].description;
				var kTemp = data.main.temp;
				var kTempH = data.main.temp_max;
				var kTempL = data.main.temp_min;
				var windSpeed = (data.wind.speed * 2.237).toFixed(2);

				var windDegree = data.wind.deg;
				var windDirection;
					//convert meteorological degrees into cardinal directions
				if (windDegree > 348.75 || windDegree < 11.25) {
					windDirection = 'N';
				} else if (windDegree > 11.75 && windDegree < 33.75) {
					windDirection = 'NNE';
				} else if (windDegree > 33.75 && windDegree < 56.25) {
					windDirection = 'NE';
				} else if (windDegree > 56.25 && windDegree < 78.75) {
					windDirection = 'ENE';
				} else if (windDegree > 78.75 && windDegree < 101.25) {
					windDirection = 'E';
				} else if (windDegree > 101.25 && windDegree < 123.75) {
					windDirection = 'ESE';
				} else if (windDegree > 123.75 && windDegree < 146.25) {
					windDirection = 'SE';
				} else if (windDegree > 146.25 && windDegree < 168.75) {
					windDirection = 'SSE';
				} else if (windDegree > 168.75 && windDegree < 191.25) {
					windDirection = 'S';
				} else if (windDegree > 191.25 && windDegree < 213.75) {
					windDirection = 'SSW';
				} else if (windDegree > 213.75 && windDegree < 236.25) {
					windDirection = 'SW';
				} else if (windDegree > 236.25 && windDegree < 258.75) {
					windDirection = 'WSW';
				} else if (windDegree > 258.75 && windDegree < 281.25) {
					windDirection = 'W';
				} else if (windDegree > 281.25 && windDegree < 303.75) {
					windDirection = 'WNW';
				} else if (windDegree > 303.75 && windDegree < 326.25) {
					windDirection = 'NW';
				} else if (windDegree > 326.25 && windDegree < 348.75){
					windDirection = 'NNW'
				} else {
					windDirection = "";
				}
				console.log(windDirection);
				
					//dynamically select background-image
				if (data.weather[0].icon == "01d") {
					$("html").css("background-image", "url('pictures/clearDay.jpg')");
					$("#cityTemp").css("color", "#ffffff");
				} else if (data.weather[0].icon == "01n") {
					$("html").css("background-image", "url('pictures/clearNight.jpg')");
					$("body").css("color", "#feffed");
				} else if (data.weather[0].icon == "02d" || data.weather[0].icon == "03d" || data.weather[0].icon == "04d") {
					$("html").css("background-image", "url('pictures/cloudDay.jpg')");
					$("#conditions").css("color", "#75a6f9");//#262626
				} else if (data.weather[0].icon == "02n" || data.weather[0].icon == "03n" || data.weather[0].icon == "04n") {
					$("html").css("background-image", "url('pictures/cloudNight.jpg')");
					$("#cityTemp").css("color", "#feffed");
				} else if (data.weather[0].icon == "50d" || data.weather[0].icon == "50n") {
					$("html").css("background-image", "url('pictures/themist.jpg')");
					$("body").css("color", "#ffffff");
					$("#conditions").css("color", "#75a6f9");
				} else if (data.weather[0].icon == "09d" || data.weather[0].icon =="09n" || data.weather[0].icon == "10d" || data.weather[0].icon == "10n") {
					$("html").css("background-image", "url('pictures/rainy.jpg')");
					$("body").css("color", "#ffffff");
					$("#conditions").css("color", "#353535");
				} else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
					$("html").css("background-image", "url('pictures.snowy.jpg')"); 
					$("body").css("color", "#cccccc");
					$("#conditions").css("color", "#353535");
				} else if (data.weather[0].icon == "11d" || data.weather[0].icon == "11n") {
					$("html").css("background-image", "url('pictures/thunder.jpg')"); //yellow
					$("#conditions").css("color", "#feffed");
				} else if (data.weather[0].id >= 900 && data.weather[0].id <= 902 || data.weather[0].id == 905 || data.weather[0].id == 906 || data.weather[0].id >= 952 && data.weather[0].id <= 962) {
					$("html").css("background-image", "url('pictures/windy.jpg')");
					$("body").css("color", "#75a6f9");
					$("#conditions").css("color", "#0f3ei5");//#28a839
				} else {
					$("html").css("background-image", "none");
				}

				var city = data.name;
				var cityToggle = 1;
					//convert kelvin to celsius and fahrenheit
				var cTemp = Math.round(kTemp - 273.15);
				var cTempH = Math.round(kTempH - 273.15);
				var cTempL = Math.round(kTempL - 273.15);
				var fTemp = Math.round(kTemp * (9/5) - 459.67);
				var fTempH = Math.round(kTempH * (9/5) - 459.67);
				var fTempL = Math.round(kTempL * (9/5) - 459.67);
				var tempToggle = 1;
				var visToggle = 1;

						//just checking...//
					/*console.log(lati + ', ' + long);
					console.log(city + ': ' + api);
					console.log(fTemp + ' / ' + cTemp);*/

					//toggle between city and country
				$('#city').html(city);
				$('#city').click(function() {
					if (cityToggle === 1) {
						$('#city').html(data.sys.country);
						cityToggle = 0;
					} else {
						$('#city').html(data.name);
						cityToggle = 1;
					}
				});

					//toggle between fahrenheit and celsius
				$('#temperature').html(fTemp + '<sup>o</sup>F');
				$('#temperature').click(function(){
					if (tempToggle === 1) {
						$('#temperature').html(cTemp + '<sup>o</sup>C');
						$('#loHi').html('Low: ' + cTempL + '<sup>o</sup>C High: ' + cTempH + '<sup>o</sup>C');
						tempToggle = 0;
					} else {
						$('#temperature').html(fTemp + '<sup>o</sup>F');
						$('#loHi').html('Low: ' + fTempL + '<sup>o</sup>F High: ' + fTempH + '<sup>o</sup>F');
						$('#toggle').html('C');
						tempToggle = 1;
					}
				});

					//dynamically populate html using jQuery and JSON data
				$('#loHi').html('Low: ' + fTempL + '<sup>o</sup>F High: ' + fTempH + '<sup>o</sup>F');
				$('#conditions').html(weatherType);
				$('#windSpeed').html('Wind Velocity: ' + windSpeed + ' mph ' + windDirection);

					//toggle between humidity and visibility
				$('#humidVis').html("Humidity: " + data.main.humidity + "%");
				$('#humidVis').click(function(){
					if (visToggle === 1) {
						$('#humidVis').html("Visibility: " + (data.visibility / 1600).toFixed(1) + ' miles');
						visToggle = 0;
					} else {
						$('#humidVis').html('Humidity: ' + data.main.humidity + '%');
						visToggle = 1;
					}
				});
			}
	
	
	if (navigator.geolocation) {
		
		navigator.geolocation.getCurrentPosition(function(position) {
			var lati = position.coords.latitude;
			var long = position.coords.longitude;

			var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lati + '&lon=' + long + '&appid=d5793ed823e510a805892083b90c3782';

				//call api 
			$.getJSON(api, function(data){
				//retrieve JSON data (url, function(parameter))
				tabulate(data);


			}).fail(function() {
				console.log('xhr error');
			});

		}, function(){
			//used as optional fail argument of the getCurrentPosition method
			console.log('geolocation: failed');
			console.log(arguments);
			var zip = prompt('What is your zip code?');

			var api = 'http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&appid=d5793ed823e510a805892083b90c3782';
					//call api
			console.log(api);

			$.getJSON(api, function(data){

				tabulate(data);
				console.log(tabulate);

			}).fail(function() {
				console.log('xhr error');
			});
	
		});
	}



});
