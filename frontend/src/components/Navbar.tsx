import "../App.css";
import chessendgames from "../assets/chessendgames.png";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={chessendgames} alt="" />
      </div>
      <div className="buttons">
        <button>Play</button>
        <button>History</button>
        <button style={{ backgroundColor: "#F28500" }}>Log in</button>
        <button style={{ backgroundColor: "#0D7AFF" }}>Sign up</button>
        <button>Settings</button>
      </div>
    </div>
  );
};
