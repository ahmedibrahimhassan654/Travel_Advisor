import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";
const App = () => {
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    console.log("bounds =", bounds);
    // const { ne, sw } = bounds;
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        console.log("data =", data);
        setPlaces(data);
      });
    }
  }, [coords, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map setBounds={setBounds} setCoords={setCoords} coords={coords} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
