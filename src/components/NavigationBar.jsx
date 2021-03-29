import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import color from "./styles/color";
import { BrowserRouter as Router, Link } from "react-router-dom";
import IconButtons from "./IconButtons";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
  Parterns: {
    color: color.black,
    backgroundColor: color.Senapyellow,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.tool}>
        <Box variant="h6" className={classes.LinksWrapper}>
          <Link to="/home" className={classes.linkItems}>
            {" "}
            Home{" "}
          </Link>
          <Link to="/SimpleRoutePage" className={classes.linkItems}>
            {" "}
            Career{" "}
          </Link>
          <Link to="/SimpleRoutePage" className={classes.linkItems}>
            {" "}
            About{" "}
          </Link>
        </Box>
        <Button className={classes.Parterns}>Parterns</Button>
        <IconButtons />
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
