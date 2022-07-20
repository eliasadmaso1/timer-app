import React, { useContext, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { appContext } from "../../context";
import PauseButton from "../../features/pauseButton/PauseButton";
import PlayButton from "../../features/playButton/PlayButton";
import SettingsButton from "../../features/settingsButton/SettingsButton";
import "./timer.css";

function Timer() {
  const context = useContext(appContext);

  const [isPaused, setIsPaused] = useState(true);

  useEffect(()=>{

  },[context])

  return (
    <div>
      <CircularProgressbar
        value={50}
        text={`${50}%`}
        styles={buildStyles({ textColor: "white", pathColor: "green" })}
      />
      <div style={{ marginTop: "20px" }}>
        {isPaused ? <PlayButton onClick={()=> setIsPaused(false)}/> : <PauseButton onClick={()=> setIsPaused(true)}/>}
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton onClick={() => context.setToggle(true)} />
      </div>
    </div>
  );
}

export default Timer;
