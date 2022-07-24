import React, { useContext } from "react";
import ReactSlider from "react-slider";
import { appContext } from "../../context";
import BackButton from "../../features/backButton/BackButton";
import "./settings.css";

function Settings() {

  const settingInfo = useContext(appContext);

  return (
    <div style={{ textAlign: "left" }}>
      <label>Work minutes : {settingInfo.workMinutes}:00 </label>
      <ReactSlider
        className="slider"
        value={settingInfo.workMinutes}
        onChange={newValue => settingInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
        thumbClassName="thumb"
        trackClassName="track"
      />
      <label>Break minutes : {settingInfo.breakMinutes}:00</label>
      <ReactSlider
        className="break-slider"
        value={settingInfo.breakMinutes}
        onChange={newValue => settingInfo.setBreakMinutes(newValue)}

        min={1}
        max={120}
        thumbClassName="break-thumb"
        trackClassName="track"
      />
      <div style={{display:"flex",justifyContent:"center"}}>
      <BackButton onClick={()=> settingInfo.setToggle(true)}/>

      </div>
    </div>
  );
}

export default Settings;
