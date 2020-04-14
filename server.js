// jshint esversion:6

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const Chart = require("chart.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  qs: {},
  headers: {
    "x-rapidapi-host": process.env.RAPID_API_HOST,
    "x-rapidapi-key": process.env.RAPID_API_HOST_KEY,
  },
};

let options1 = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  qs: { country: "All" },
  headers: {
    "x-rapidapi-host": process.env.RAPID_API_HOST,
    "x-rapidapi-key": process.env.RAPID_API_HOST_KEY,
  },
};

let options2 = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  qs: { country: "Bangladesh" },
  headers: {
    "x-rapidapi-host": process.env.RAPID_API_HOST,
    "x-rapidapi-key": process.env.RAPID_API_HOST_KEY,
  },
};

// Root Route
app.route("/").get((req, res) => {
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const data = JSON.parse(body);
    let responseData = data.response;

    const sortedData = responseData.sort(
      (a, b) => b.cases.total - a.cases.total
    );
    request(options1, (err1, resposne1, body1) => {
      if (err1) throw new Error(err1);
      const data1 = JSON.parse(body1);
      let responseData1 = data1.response[0];
      request(options2, (err2, resposne2, body2) => {
        if (err2) throw new Error(err2);
        const data2 = JSON.parse(body2);
        let responseData2 = data2.response[0];
        console.log(responseData1, responseData2);
        res.render("index", {
          data: sortedData,
          data1: responseData1,
          data2: responseData2,
        });
      });
    });
  });
});

// server port
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () =>
  console.log("Server started successfully on port " + port)
);
