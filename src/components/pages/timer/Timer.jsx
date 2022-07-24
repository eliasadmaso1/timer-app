import React, { useContext, useEffect, useState, useRef } from "react";
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
  const [mode,setMode] = useState('work');
  const [secondsLeft,setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const switchMode = ()=>{
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds = nextMode === "work" ? context.workMinutes * 60 : context.breakMinutes * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  const decrementSeconds = ()=>{
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)
  }



  const initTimer = ()=>{
    secondsLeftRef.current = context.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
  }



  useEffect(()=>{
    initTimer();

    const interval = setInterval(()=>{
      if(isPausedRef.current){
        return;
      }
      if(secondsLeftRef.current === 0){
        return switchMode();
      }
      decrementSeconds();
    },1000);

    return ()=> clearInterval(interval)
    


  },[context]);

  const totalSeconds = mode === "work" ? context.workMinutes * 60 : context.breakMinutes * 60;
  const percent = Math.round(secondsLeft / totalSeconds * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = '0' + seconds;


  return (
    <div>
      <CircularProgressbar
        value={percent}
        text={minutes + ':' + seconds}
        styles={buildStyles({ textColor: "white", pathColor: "green" })}
      />
      <div style={{ marginTop: "20px" }}>
        {isPaused ? <PlayButton onClick={()=> {setIsPaused(false); isPausedRef.current = false}}/> : <PauseButton onClick={()=> {setIsPaused(true); isPausedRef.current = true}}/>}
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton onClick={() => context.setToggle(false)} />
      </div>
    </div>
  );
}

export default Timer;
