// where game actually happens
import { useEffect } from "react";
import { Button } from "../components/Button";
import { ChessBoard } from "../components/Chessboard";
import { MovesHistory } from "../components/MovesHistory";
import { useSocket } from "../hooks/useSocket";
export const ChessGame = () => {
  const INIT_GAME = "init_game";
  const MOVE = "move";
  const GAME_OVER = "game_over";
  const socket = useSocket();
  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case INIT_GAME:
          console.log("init game");
          break;
        case MOVE:
          console.log("move");
          break;
        case GAME_OVER:
          console.log("game over");
          break;
        default:
          break;
      }
    };
  });
  if (!socket) return <div>Connecting...</div>;
  // users needs to be actual users, from database. Guest users are allowed.
  return (
    <div className="game">
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        <h2>Opponent</h2>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ChessBoard />
          <div>
            <h2>Guest7988086990</h2>
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            socket.send(JSON.stringify({ type: INIT_GAME }));
          }}
        >
          Play
        </Button>
        <MovesHistory />
      </div>
    </div>
  );
};
