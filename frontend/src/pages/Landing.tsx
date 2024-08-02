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
          <div>
            <h2 style={{ fontSize: "2.5em", fontWeight: "bold" }}>
              Practice endgames against real opponents!
            </h2>
            <button
              style={{
                fontSize: "2.5em",
                fontWeight: "bold",
                backgroundColor: "#F28500",
                width: "35%",
                height: "20%",
                borderRadius: "15px",
              }}
            >
              Play
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <h1
              style={{
                fontSize: "2.5em",
                fontWeight: "bold",
                textAlign: "center",
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
            <img src="" alt="" />
          </div>
          <div>
            <h1
              style={{
                fontSize: "2.5em",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ☆Leaderboard
            </h1>
            <ol
              style={{
                textAlign: "center",
                fontSize: "1.2em",
                fontWeight: "bold",
                padding: "5px",
              }}
            >
              <ul>Magnus Carlsen</ul>
              <ul>Hikaru Nakamura</ul>
              <ul>Fabiano Caruana</ul>
              <ul>Alireza Firouzja</ul>
              <ul>Nodirbek Abdusattorov</ul>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
