import React, { useState, useEffect } from "react";

import "./App.css";
import ReactPlayer from "react-player";
import travelVideo from "../src/assets/vid1.mp4";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const videoSrc = travelVideo;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <>
      <div
        className={
          loading
            ? "loading-page-outer"
            : "loading-page-outer loader-outer-hidden"
        }
      >
        <ReactPlayer
          url={videoSrc}
          playing={true}
          muted
          loop={true}
          width={"110%"}
          height={"110%"}
        />
        <div className="preloader-outer">
          <GridLoader
            color={"rgba(255, 255, 255, 0.556)"}
            loading={loading}
            size={40}
            className="preloader"
          />
        </div>
      </div>
      <div className="home-page"></div>
    </>
  );
}

export default App;
