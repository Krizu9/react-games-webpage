import React from "react";
import "./Game1.css";

interface CardProps {
  image: string;
  flipped: boolean;
  key: number;
  matched: boolean;
  onClick: () => void;
}
const Card: React.FC<CardProps> = ({ image, flipped, matched, onClick }) => (
  <div
    className={`card ${flipped || matched ? "flipped" : ""}`}
    onClick={onClick}
  >
    {flipped ? (
      <img src={image} alt="Card" />
    ) : (
      <img src={require('./images/backside.jpg')} alt="Back of Card" />
    )}
  </div>
);
export default Card;