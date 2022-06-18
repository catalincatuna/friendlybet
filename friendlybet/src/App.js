import * as React from "react";
import Navbar from "./components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import FormDialog from "./components/Button";
import request from "request";

// var request = require("request");

var options = {
  url:
    "https://app.sportdataapi.com/api/v1/soccer/leagues?apikey=da2cefa0-eccd-11ec-b1b2-d329038c8fe7&country_id=237",
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    console.log("asd");
  }
}

request(options, callback);

const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <div
          style={{
            padding: "300px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <FormDialog />
        </div>
      </StyledEngineProvider>
    </>
  );
};
export default App;
