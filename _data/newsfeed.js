/*
** DISCONTINUED TO PREVENT BUILD ERROR **

const axios = require("axios");
require('dotenv').config();
const fs = require('fs');

module.exports = async function() {
    try {
      const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
      /*THIS WORKS BUT IT'S CIRCULAR AND PROVOKES REBUILDING
      var jasonContent = JSON.stringify(response.data);
      console.log(jsonContent);

      fs.writeFile("_data/output.json", jasonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
*/
/*
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  */