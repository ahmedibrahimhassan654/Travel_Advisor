import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import useStyles from "./style";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("resturants");
  
  return (
    <div className={classes.container}>
      <Typography variant="h4">Food & Drink around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>type</InputLabel>
        <Select
          vlaue={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <MenuItem vlaue="resturants">Resturants</MenuItem>
          <MenuItem vlaue="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attraction</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          vlaue={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <MenuItem vlaue="resturants">Resturants</MenuItem>
          <MenuItem vlaue="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attraction</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
