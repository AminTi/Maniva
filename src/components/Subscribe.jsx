import React from "react";
import Button from "@material-ui/core/Button";
import color from "./styles/color";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: color.black,
    backgroundColor: color.white,
    fontSize: "22px",
    borderRadius: "40px",
  },
}));

const Subscribe = () => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" className={classes.btn}>
        Subscribe
      </Button>
    </>
  );
};

export default Subscribe;
