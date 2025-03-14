import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./Game1.css";

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const initialCards = [
  { id: 0, image: require("./images/image1.jpg"), flipped: false, matched: false },
  { id: 1, image: require("./images/image2.jpg"), flipped: false, matched: false },
  { id: 2, image: require("./images/image3.jpg"), flipped: false, matched: false },
  { id: 3, image: require("./images/image4.jpg"), flipped: false, matched: false },
  { id: 4, image: require("./images/image5.jpg"), flipped: false, matched: false },
  { id: 5, image: require("./images/image6.jpg"), flipped: false, matched: false },
  { id: 0, image: require("./images/image1.jpg"), flipped: false, matched: false },
  { id: 1, image: require("./images/image2.jpg"), flipped: false, matched: false },
  { id: 2, image: require("./images/image3.jpg"), flipped: false, matched: false },
  { id: 3, image: require("./images/image4.jpg"), flipped: false, matched: false },
  { id: 4, image: require("./images/image5.jpg"), flipped: false, matched: false },
  { id: 5, image: require("./images/image6.jpg"), flipped: false, matched: false },
];

const GameBoard = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState(shuffleArray([...initialCards]));
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false); 

  const handleCardClick = (index: number) => {
    if (isProcessing || cards[index].flipped || cards[index].matched) return;

    const updatedCards = [...cards];
    updatedCards[index].flipped = true;
    setCards(updatedCards);
    setFlippedCards((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsProcessing(true); 
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.id === secondCard.id) {
        setCards((prev) =>
          prev.map((card, index) =>
            index === firstIndex || index === secondIndex
              ? { ...card, matched: true }
              : card
          )
        );
        setFlippedCards([]);
        setIsProcessing(false);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, index) =>
              index === firstIndex || index === secondIndex
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  const resetGame = () => {
    setCards(shuffleArray([...initialCards]));
    setCards((prev) => prev.map((card) => ({ ...card, flipped: false, matched: false })));
    setFlippedCards([]);
    setIsProcessing(false);
  };

  return (
    <div className="container1">
      <h1>Memory Game</h1>
      <div className="game-container1">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            flipped={card.flipped}
            matched={card.matched}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <div>
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
