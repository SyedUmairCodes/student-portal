import React from "react";
import Notification from "../components/landing-page/Notification";
import Courses from "../components/landing-page/Courses";
import Hero from "../components/landing-page/Hero";
import Team from "../components/landing-page/Team";
import Stats from "../components/landing-page/Stats";

import Footernew from "../components/footer/Footernew";

const index = () => {
  return (
    <>
      <Notification />
      <Hero />
      <Courses />
      <Team />
      <Stats />
      <Footer />
    </>
  );
};

export default index;
