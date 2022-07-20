import logo from './logo.svg';
import './App.css';
import Timer from './components/pages/timer/Timer';
import { useState } from 'react';
import Settings from './components/pages/settings/Settings';
import { appContext } from './components/context';

function App() {

  const [toggle,setToggle] = useState(true);
  const [workMinutes,setWorkMinutes] = useState(0);
  const [breakMinutes,setBreakMinutes] = useState(0);

  return (
    <main>
      <appContext.Provider value={{workMinutes,setWorkMinutes,breakMinutes,setBreakMinutes,toggle,setToggle}}>
      {toggle ? <Settings/> :   <Timer/>}
      </appContext.Provider>
    
    
    </main>
  );
}

export default App;
