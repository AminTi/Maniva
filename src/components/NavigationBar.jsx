import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import color from "./styles/color";
import { BrowserRouter as Router, Link } from "react-router-dom";
import IconButtons from "./IconButtons";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: color.white,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  linkItems: {
    textDecoration: "none",
    fontSize: "22px",
    lineHeight: "20px",
    textAlign: "center ",
    color: color.black,
    fontWeight: "bold",
    margin: "5px",
    "&:hover": {
      color: color.Senapyellow,
    },
  },

  LinksWrapper: {
    margin: "0 auto",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.tool}>
        <Box variant="h6" className={classes.LinksWrapper}>
          <Link className={classes.linkItems}> Home </Link>
          <Link className={classes.linkItems}> Career </Link>
          <Link className={classes.linkItems}> About </Link>
        </Box>
        <IconButtons />
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
