import "./App.css";
import { Landing } from "./pages/Landing";
import { Game } from "./pages/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* add basic routing */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
