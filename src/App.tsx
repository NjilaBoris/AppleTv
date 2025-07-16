import React from "react";
import Header from "./components/layouts/Header";
import Hero from "./components/section/Hero";
import Usps from "./components/section/Usps";
import { VideoCarousel } from "./components/section/video-carousel";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-primary relative z-10">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
};

export default App;
