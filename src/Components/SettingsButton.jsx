import { Settings } from "lucide-react";

function SettingsButton(props) {
  return (
    <button
      {...props}
      style={{
        width: "40%",
        marginTop: "20px",
        backgroundColor: "#c25d5d",
        color: "white",
      }}
    >
      <Settings />
    </button>
  );
}

export default SettingsButton;
