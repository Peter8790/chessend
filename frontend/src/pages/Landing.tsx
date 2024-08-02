// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router";
import { NavBar } from "../components/Navbar";
import CarlsenCaruana from "../assets/CarlsenCaruana.png";
import AnandCarlsen from "../assets/AnandCarlsen.png";
import AlburtKasparov from "../assets/AlburtKasparov.png";
import "../App.css";
import { useState, useEffect } from "react";
export const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [CarlsenCaruana, AnandCarlsen, AlburtKasparov];

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
            <h1>Welcome to ChessEnd</h1>
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
          <button
            style={{
              fontSize: "2.5em",
              fontWeight: "bold",
              backgroundColor: "#F28500",
              width: "35%",
              height: "15%",
              marginTop: "6em",
              borderRadius: "15px",
            }}
          >
            Play
          </button>
          {/* <h2>Practice endgames against real opponents!</h2> */}
        </div>
      </div>
    </>
  );
};
