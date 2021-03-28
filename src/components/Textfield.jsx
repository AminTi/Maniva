import React from "react";
import { TextField } from "@material-ui/core";
import color from "./styles/color";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputs: {
    border: "1px solid rgb(255, 255, 255)",
    borderRadius: " 20px",
    marginBottom: "5%",
    height: "50px",
    minWidth: "300px",

    [theme.breakpoints.down("sm")]: {
      minWidth: "0px !important",
    },
  },
}));

const Textfield = () => {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.inputs}
        // id="outlined-basic"
        label="..mail"
        // variant="outlined"
        InputProps={{ disableUnderline: true }}
      />
    </>
  );
};

export default Textfield;
