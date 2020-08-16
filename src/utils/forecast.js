const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7c046c2a7048d19bc2a897db0e3b19f3&query=' + longitude + ',' + latitude

    request({url, json:true}, (error, { body } = {}) => {
        if(error) {
            callback('Unable to connect to data provider', undefined)
        } else if (body.success === false){ 
            callback('Sorry, but your API request failed, try again', undefined)
        } else {
            callback(undefined, body.current.temperature + ' ' + body.location.timezone_id)
    }
    })
}

module.exports = forecast