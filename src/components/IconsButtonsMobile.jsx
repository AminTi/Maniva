import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import color from "./styles/color";
import { Box } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  Wrapper: {
    display: "flex",

    justifyContent: "flex-end",
  },
  icon: {
    color: color.white,
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

export const IconsButtonsMobile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Wrapper}>
      <IconButton>
        <AddShoppingCartIcon className={classes.icon} />
      </IconButton>
      <IconButton>
        <MenuIcon className={classes.icon} />
      </IconButton>
    </Box>
  );
};

export default IconsButtonsMobile;
