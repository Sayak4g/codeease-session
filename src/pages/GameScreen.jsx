import React from "react";
import { useLocation } from "react-router-dom";
import ShinnyMascot from "../components/ShinnyMascot";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="page-center">
      <div className="cartoon-theme">
        <div className="hero">
          <div className="mascot-wrap">
            <ShinnyMascot />
          </div>

          <div className="startContent">
            <h1 className="title">Game Screen</h1>
            <p className="subtitle">Selected difficulty: <strong>{difficulty}</strong></p>
            {/* Only show the selected difficulty */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
