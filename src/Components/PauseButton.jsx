import { PauseCircle } from "lucide-react";

function PauseButton(props) {
  return (
    <button {...props}>
      <PauseCircle size={30} />
    </button>
  );
}

export default PauseButton;
