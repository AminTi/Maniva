import React from "react";
import HeromoImage from "../components/HeromoImage";
import NavigationBar from "../components/NavigationBar";
import MainComponents from "../components/MainComponents";
import FooterPage from "../components/FooterPage";
import BottomBar from "../components/BottomBar";

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
