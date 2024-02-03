import { useContext } from "react";
import SettingsContext from "./SettingsContext";
import MenuButton from "./Components/MenuButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);

  function handlePomodoroChange(event) {
    settingsInfo.setPomodoroMinutes(event.target.value);
  }

  function handleBreakChange(event) {
    settingsInfo.setBreakMinutes(event.target.value);
  }

  function handleSettingToggle() {
    settingsInfo.setShowSettings(false);
  }

  return (
    <>
      <box>
        <label
          style={{ fontSize: "2rem", display: "flex", flexDirection: "column" }}
        >
          Pomodoro
          <span style={{ color: "wheat" }}>
            {settingsInfo.pomodoroMinutes}:00
          </span>
        </label>
        <input
          value={settingsInfo.pomodoroMinutes}
          onChange={handlePomodoroChange}
          min={1}
          max={120}
        ></input>
        <label
          style={{ fontSize: "2rem", display: "flex", flexDirection: "column" }}
        >
          Break
          <span style={{ color: "wheat" }}>{settingsInfo.breakMinutes}:00</span>
        </label>
        <input
          value={settingsInfo.breakMinutes}
          onChange={handleBreakChange}
          min={1}
          max={120}
        ></input>
      </box>
      <MenuButton onClick={() => settingsInfo.setShowSettings(false)} />
    </>
  );
}

export default Settings;
