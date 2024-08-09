import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { MoveList } from "../components/MoveList";
import { useSocket } from "../hooks/useSocket";
import { Chess, Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import "../App.css";
export const ChessGame = () => {
  const INIT_GAME = "init_game";
  const MOVE = "move";
  const GAME_OVER = "game_over";

  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [position, setPosition] = useState("start");
  const [isGameActive, setIsGameActive] = useState(false);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case INIT_GAME:
          setChess(new Chess());
          setPosition("start");
          setIsGameActive(true);
          console.log(data);
          console.log("Game initialized");
          break;
        case MOVE:
          const moveData = data.payload;
          chess.move(moveData.san);
          setPosition(chess.fen());
          console.log("Move received:", moveData.san);
          console.log("Position:", chess.fen());
          break;
        case GAME_OVER:
          setIsGameActive(false);
          console.log("Game over");
          break;
        default:
          break;
      }
    };

    return () => {
      if (socket) {
        socket.onmessage = null; // Clean up the socket listener
      }
    };
  }, [socket, chess]);

  const handleMove = (from: Square, to: Square): boolean => {
    if (!isGameActive) return false;

    const move = chess.move({
      from,
      to,
    });

    if (move) {
      setPosition(chess.fen());
      socket.send(JSON.stringify({ type: MOVE, move }));
      console.log("Move sent:", move);
      console.log("Position:", chess.fen());
      return true;
    } else {
      console.log("Invalid move");
      return false;
    }
  };

  return (
    <div className="game">
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        <h2>Opponent</h2>
        <div style={{ width: "100%", height: "100%" }}>
          <Chessboard
            position={position}
            boardWidth={773.3}
            onPieceDrop={handleMove}
          />
          <div>
            <h2>Guest7988086990</h2>
          </div>
        </div>
      </div>
      <div className="move-history">
        <MoveList />
        <Button
          onClick={() => {
            socket.send(JSON.stringify({ type: INIT_GAME }));
          }}
        >
          Play
        </Button>
      </div>
    </div>
  );
};
