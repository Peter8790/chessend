// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router";
import { NavBar } from "../components/Navbar";
import CarlsenCaruana from "../assets/CarlsenCaruana.png";
import AnandCarlsen from "../assets/AnandCarlsen.png";
import AlburtKasparov from "../assets/AlburtKasparov.png";
import "../App.css";
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
export const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [CarlsenCaruana, AnandCarlsen, AlburtKasparov];

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="landingGrid">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="content">
          <div>
            <div>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? "active" : ""}`}
                >
                  <img src={slide} alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "20%" }}>
            <h1>Practice endgames against real opponents!</h1>
            <Button onClick={() => navigate("/game")} children={"Play"} />
          </div>
          <div>
            <h1
              style={{
                fontSize: "2.5em",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20%",
              }}
            >
              🕮What is ChessEnd?
            </h1>
            <p
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ChessEnd helps you perfect endgames by playing real opponents.
              Tackle equal, winning, and losing positions to sharpen your skills
              to take your game to the next level.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
