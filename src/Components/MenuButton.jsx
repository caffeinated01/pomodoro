import { ChevronLeftCircle } from "lucide-react";

function MenuButton(props) {
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
      <ChevronLeftCircle />
    </button>
  );
}

export default MenuButton;
