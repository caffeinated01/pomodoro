import PlayButton from "./Components/PlayButton";
import PauseButton from "./Components/PauseButton";
import SettingsButton from "./Components/SettingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("pomodoro");
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "pomodoro" ? "break" : "pomodoro";
      const nextSeconds =
        (nextMode === "pomodoro"
          ? settingsInfo.pomodoroMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.pomodoroMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <>
      <box>
        <div>
          <h1 style={{ fontSize: "2rem" }}>
            {modeRef.current.charAt(0).toUpperCase() + modeRef.current.slice(1)}
          </h1>
          <h1 style={{ fontSize: "4rem" }}>{minutes + ":" + seconds}</h1>
        </div>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </box>
      <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
    </>
  );
}

export default Timer;
