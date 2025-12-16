import React from "react";
import "./CartoonMascot.css";

const CartoonMascot = () => {
  return (
    <div className="mascot-wrap">
      <svg className="mascot" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffdfe6" />
            <stop offset="100%" stopColor="#ffd2a6" />
          </linearGradient>
        </defs>
        <g>
          <ellipse cx="60" cy="70" rx="42" ry="32" fill="url(#g)" />
          <circle cx="42" cy="50" r="8" fill="#222" />
          <circle cx="78" cy="50" r="8" fill="#222" />
          <circle cx="40" cy="48" r="3" fill="#fff" />
          <circle cx="76" cy="48" r="3" fill="#fff" />
          <path d="M46 72 Q60 86 74 72" stroke="#aa4" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="28" cy="36" r="6" fill="#fff8a6" stroke="#f7c" strokeWidth="1" />
          <circle cx="92" cy="34" r="5" fill="#c8f" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
};

export default CartoonMascot;
