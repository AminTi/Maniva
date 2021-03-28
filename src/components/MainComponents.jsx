import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import color from "./styles/color";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "5%",
  },

  text1: {
    position: "absolute",
    bottom: "8px",
    left: "16px",
    color: color.white,
  },

  text3: {
    position: "absolute",
    bottom: "8px",
    left: "150px",
    color: color.white,
  },

  text3: {
    position: "absolute",
    bottom: "8px",
    left: "150px",
    color: color.white,
  },

  Test: {
    position: "relative",
    height: "50vh",
    width: "50vh",
    backgroundImage: `url("/image/Rectangle.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "10px 10px",
    [theme.breakpoints.down("xs")]: {
      height: "20vh",
      width: "50vh",
    },
  },
}));

const MainComponents = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Box className={classes.Test}>
        <h2 className={classes.text1}> Maniva 1</h2>
      </Box>

      <Box className={classes.Test}>
        <h2 className={classes.text3}> Maniva 2</h2>
      </Box>
      <Box className={classes.Test}>
        <h2 className={classes.text3}> Maniva 3</h2>
      </Box>
    </Grid>
  );
};

export default MainComponents;
