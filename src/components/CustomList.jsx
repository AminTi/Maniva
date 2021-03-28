import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import color from "./styles/color";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: color.Senapyellow,
    [theme.breakpoints.down("sm")]: {
      borderBottom: "1px solid white  ",
    },
  },
  expandmore: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
  },

  test: {
    color: color.black,
    fontWeight: "bold",
    lineHeight: "16px",
  },
  expand: {
    display: "none",
    color: color.white,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  li: {
    listStyleType: "disc",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  listItem: {
    color: color.black,
    padding: "10px 10px",

    "&::before": {
      content: "2020",
      color: "red",
    },
  },
}));

const CustomList = ({ label }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.expandmore}>
        <span className={classes.test}> {label} </span>
        <ExpandMoreIcon className={classes.expand} />
      </Box>

      <ul className={classes.li}>
        <li className={classes.listItem}>Maniva</li>
        <li className={classes.listItem}>Maniva</li>
        <li className={classes.listItem}>Maniva</li>
        <li className={classes.listItem}>Maniva</li>
        <li className={classes.listItem}>Maniva</li>
      </ul>
    </Box>
  );
};
export default CustomList;
