import Timer from "./Timer";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";
import { useState } from "react";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          pomodoroMinutes,
          breakMinutes,
          setPomodoroMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
