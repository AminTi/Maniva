import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import color from "./styles/color";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // minWidth: 400,
  },

  header: {
    fontStyle: "HelveticaNeue",
    fontSize: "70px",
    fontWeight: "bold",
    lineHeight: "84px",
    letterSpacing: "1.2px",
    color: color.white,
  },
}));

const Headers = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <h1 className={classes.header}>
        {" "}
        Welcome to <br />
        Happyweb{" "}
      </h1>
    </Box>
  );
};

export default Headers;
