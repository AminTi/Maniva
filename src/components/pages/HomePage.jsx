import React from "react";
import HeromoImage from "../HeromoImage";
import NavigationBar from "../NavigationBar";
import MainComponents from "../MainComponents";
import FooterPage from "../FooterPage";
import BottomBar from "../BottomBar";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <HeromoImage />
      <MainComponents />
      <FooterPage />
      <BottomBar />
    </>
  );
};

export default HomePage;
