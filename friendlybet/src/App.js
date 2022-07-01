import * as React from "react";
import Navbar from "./components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import FormDialog from "./components/Button";
import request from "request";

// var request = require("request");

export const UserContext = React.createContext();

const App = () => {
  const [data, setData] = React.useState(null);

  var options = {
    url:
      "https://app.sportdataapi.com/api/v1/soccer/matches?apikey=dd3fb5c0-ef41-11ec-8b0e-c5786e7c8139&season_id=1980&date_from=2021-08-14",
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      setData(JSON.parse(body));
      console.log("asd");
    }
  }
  React.useEffect(() => {
    request(options, callback);
  }, []);

  data ? console.log(data.query) : console.log("data note fetched");

  let datta = 1;
  return (
    <>
      <UserContext.Provider value={datta}>
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
      </UserContext.Provider>
    </>
  );
};
export default App;
