import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconsButtonsMobile from "./IconsButtonsMobile";
import ButtonWhite from "./ButtonWhite";
import Headers from "./Headers";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Heroimg: {
    position: "relative",
    width: "100%",
    display: "flex",
    width: "100vw",
    // backgroundImage: `url("/image/TopPhoto.png")`,
    height: "80vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    flexDirection: "column",
    //overlay
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/image/TopPhoto.png")`,
  },
  IconBtn: {
    position: "absolute",
    top: 150,
    right: 100,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const HeromoImage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.Heroimg} maxWidth="xl">
      <IconsButtonsMobile />
      <Box className={classes.IconBtn}>
        <Headers />
        <ButtonWhite />
      </Box>
    </Container>
  );
};

export default HeromoImage;
