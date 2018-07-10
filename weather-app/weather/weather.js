const request = require('request');

var getWeather = (lat, long, callback) => {


    request({
        url: `https://api.darksky.net/forecast/b40cd1045e228649a086896d842eab4b/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if(error)
            callback('Unable to connect to Forecast.io servers');
        else if (response.statusCode === 400 || response.statusCode === 404)
            callback('Unable to fetch weather');
        else if (response.statusCode === 200)
            callback(undefined, {
                temperature: body.currently.temperature, 
                apparentTemperature: body.currently.apparentTemperature
            });
    });
}

module.exports.getWeather = getWeather;