import React from "react";
import "./ShinnyMascot.css";

const ShinnyMascot = ({ mood = "happy" }) => {
  return (
    <div className="shinny-wrap">
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Doraemon_character.png/250px-Doraemon_character.png" 
        alt="Doraemon mascot" 
        className="shinny doraemon-img"
        onError={(e) => {
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='50' r='35' fill='%230196d6'/%3E%3Cellipse cx='60' cy='75' rx='35' ry='25' fill='%23fff'/%3E%3Ccircle cx='45' cy='45' r='6' fill='%231a1a1a'/%3E%3Ccircle cx='75' cy='45' r='6' fill='%231a1a1a'/%3E%3Ccircle cx='60' cy='78' r='5' fill='%23ff4858'/%3E%3C/svg%3E";
        }}
      />
    </div>
  );
};

export default ShinnyMascot;
