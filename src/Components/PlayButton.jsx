import { PlayCircle } from "lucide-react";

function PlayButton(props) {
  return (
    <button {...props}>
      <PlayCircle size={30} />
    </button>
  );
}

export default PlayButton;
