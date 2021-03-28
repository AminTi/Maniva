import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import color from "./styles/color";
import { Box } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: color.white,
  },

  copyright: {
    color: color.black,
    [theme.breakpoints.down("xs")]: {
      marginRight: "auto",
    },
  },
  icons: {
    color: color.Senapyellow,
  },
  tlbr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },

  iconBox: {
    [theme.breakpoints.down("xs")]: {
      marginRight: "auto",
    },
  },
}));

const BottomBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.tlbr}>
          <Typography color="inherit" className={classes.copyright}>
            &copy; Maniva By Amin Titi
          </Typography>
          <Box className={classes.iconBox}>
            <IconButton>
              <FacebookIcon className={classes.icons} />
            </IconButton>
            <IconButton>
              <InstagramIcon className={classes.icons} />
            </IconButton>
            <IconButton>
              <LinkedInIcon className={classes.icons} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default BottomBar;
