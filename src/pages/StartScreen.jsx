import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css";
import ShinnyMascot from "../components/ShinnyMascot";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = (difficulty) => {
    navigate("/game", { state: { difficulty } });
  };

  return (
    <div className="container cartoon-theme">
      <div className="hero">
        <div className="mascot-wrap">
          <ShinnyMascot />
        </div>

        <div className="startContent">
          <h1 className="title">Welcome to the Game!</h1>
          <p className="subtitle">Pick a difficulty and have fun!</p>

          <div className="buttonContainer">
            <button
              className="button soft"
              onClick={() => handleDifficultySelect("Easy")}
            >
              Easy
            </button>
            <button
              className="button soft"
              onClick={() => handleDifficultySelect("Medium")}
            >
              Medium
            </button>
            <button
              className="button soft"
              onClick={() => handleDifficultySelect("Hard")}
            >
              Hard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
