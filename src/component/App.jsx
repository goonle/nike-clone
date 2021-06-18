import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import VideoPlayer from "./VideoPlayer";
import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import Images from "./Images";
import * as Array from "./Arrays";
import SlowSlider from "./SlowSlider";
import NinetySlide from "./NinetySlide";

export default function App() {
  return (
    <div className="App">
      {/* <Header />
      <NavBar />
      <VideoPlayer url="https://youtu.be/-SBsT032jVI" />
      <Banner
        title={Array.summer.title}
        content={Array.summer.content}
        button={Array.summer.button}
      />
      <dt className="sliderTitle">이번 주 스타일링</dt>
      <ImageSlider />
      <Banner
        title={Array.sandel.title}
        content={Array.sandel.content}
        button={Array.sandel.button}
      />
      <VideoPlayer url="https://youtu.be/7BeaT2LlAQ8" />
      <Banner
        title={Array.tShirts.title}
        content={Array.tShirts.content}
        button={Array.tShirts.button}
      />
      <Images />
      <Banner
        title={Array.washPack.title}
        content={Array.washPack.content}
        button={Array.washPack.button}
      />
      <SlowSlider />
      <Banner
        title={Array.waffle.title}
        content={Array.waffle.content}
        button={Array.waffle.button}
      /> */}
      <NinetySlide />
    </div>
  );
}
