import React from "react";
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://app.sportdataapi.com/api/v1/soccer/matches?apikey=da2cefa0-eccd-11ec-b1b2-d329038c8fe7&season_id=496&date_from=2020-09-19",
  //   params: {include: 'bench', tz: 'Europe/Amsterdam'},
  //   headers: {
  //     'X-RapidAPI-Key': 'f673dba18dmshdf7f376a9a7b71bp14e588jsnfdcc5feb938d',
  //     'X-RapidAPI-Host': 'football-pro.p.rapidapi.com'
  //   }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default function DataApi() {
  return <div>DataApi</div>;
}
