import { Chessboard } from "react-chessboard";

export function ChessBoard({}) {
  const customDarkSquareStyle = { backgroundColor: "#B38B6D" };
  const customLightSquareStyle = { backgroundColor: "#EEEED2" };

  return (
    <div>
      <Chessboard
        id="BasicBoard"
        arePiecesDraggable={true}
        customDarkSquareStyle={customDarkSquareStyle}
        customLightSquareStyle={customLightSquareStyle}
        boardWidth={773.3}
      />
    </div>
  );
}
