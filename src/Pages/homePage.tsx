import React from "react";
import HeroSlider from "../components/homepage/Heroslider";
import WhatWeDo from "../components/homepage/WhatWeDo";
import VideoSection from "../components/homepage/video";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <WhatWeDo />
      <VideoSection />
    </div>
  );
};

export default HomePage;
