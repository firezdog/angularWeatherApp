const classApp = angular.module('weatherApp',[]);

classApp.controller('weatherCtrl', function($scope, $http){
    let weatherScope = $scope;
    let http = $http;
    
    weatherScope.forecasts = [];
    let key = "4f83ada97dee876958d1c2f75df73f01";
    
    navigator.geolocation.getCurrentPosition( 
        (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            http.get(`http://api.openweathermap.org/data/2.5/forecast?appid=${key}&lat=${lat}&units=imperial&lon=${lon}`).then(function(res){
                weatherScope.processData(res.data);
            });

        },
        (error) => {
            
            http.get(`http://api.openweathermap.org/data/2.5/forecast?zip=60661&units=imperial&appid=${key}`).then(function (res) {
                weatherScope.processData(res.data);
            });
        }
    );
    
    weatherScope.processData = (data) => {
        console.log(data);
        weatherScope.city = data.city.name;
        weatherScope.country = data.city.country;
        for (let i=0; i < data.list.length; i+= 8){
            let forecast = data.list[i];
            //Ideally I would do this with a pipe, but I'm having trouble with the .dt response.
            let date = new Date(forecast.dt_txt).toDateString().substr(0,3);
            let icon = forecast.weather[0].icon
            let icon_url = `http://openweathermap.org/img/w/${icon}.png`
            weatherScope.forecasts.push({forecast: forecast, date: date, icon_url: icon_url});
        }
    }

    function sampleFunction() {
        console.log("Hello world.");
    }

});