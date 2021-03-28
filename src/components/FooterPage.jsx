import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Divider } from "@material-ui/core";
import CustomList from "./CustomList";
import Textfield from "./Textfield";
import Subscribe from "./Subscribe";
import Grid from "@material-ui/core/Grid";
import color from "./styles/color";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    padding: "200px 00px",
    backgroundColor: color.Senapyellow,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      padding: "0 !important",
      flexDirection: "column-reverse",
    },
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  imgWrapper: {
    display: "flex",
    alignItems: "flex-end",
    padding: "10px 10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      padding: "10px 10px",
      display: "block",
    },
  },
}));

const FooterPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.wrapper} maxWidth="xl">
      <Box className={classes.btnWrapper}>
        <Textfield />
        <Subscribe />
      </Box>
      <CustomList label={"Browse"} />
      <CustomList label={"About"} />
      <CustomList label={"Support"} />
      <Box className={classes.imgWrapper}>
        <img src={"/image/Shape.png"} alt="giftbox" />
      </Box>
    </Container>
  );
};

export default FooterPage;
