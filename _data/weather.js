/*
const axios = require("axios");
require('dotenv').config();



module.exports = async function() {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/
    weather?id=2514169&appid=${process.env.WEATHER_API_KEY}&units=metric`);
    //console.log('data'+res.json())
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
/*
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  */
