import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import color from "./styles/color";

const useStyles = makeStyles((theme) => ({
  Button: {
    border: "4px solid #FFFFFF",
    LineHeight: "28,13px",
    fontSize: "18px",
    color: color.white,
    background: color.Senapyellow,
    borderRadius: "49px",
    minWidth: " 246px",
  },
}));

const ButtonWhite = () => {
  const classes = useStyles();
  return (
    <Box>
      <Button className={classes.Button} variant="contained">
        See more
      </Button>
    </Box>
  );
};

export default ButtonWhite;
