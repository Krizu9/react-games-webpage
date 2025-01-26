

import React, { useState, useEffect } from 'react';
import './Game2.css';

const GRID_SIZE = 20;

const initialSnake = [
  { x: 10, y: 10 },
];

function SnakeGame() {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState({ dx: 1, dy: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (!gameOver) {
      const handleKeyPress = (e: KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowUp':
          case 'w':
        if (direction.dy !== 1) {
          setDirection({ dx: 0, dy: -1 });
        }
        break;
          case 'ArrowDown':
          case 's':
        if (direction.dy !== -1) {
          setDirection({ dx: 0, dy: 1 });
        }
        break;
          case 'ArrowLeft':
          case 'a':
        if (direction.dx !== 1) {
          setDirection({ dx: -1, dy: 0 });
        }
        break;
          case 'ArrowRight':
          case 'd':
        if (direction.dx !== -1) {
          setDirection({ dx: 1, dy: 0 });
        }
        break;
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [direction, gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newSnake = [
          {
            x: (prevSnake[0].x + direction.dx + GRID_SIZE) % GRID_SIZE,
            y: (prevSnake[0].y + direction.dy + GRID_SIZE) % GRID_SIZE,
          },
          ...prevSnake,
        ];

        // check collision with self
        const head = newSnake[0];
        if (
          newSnake.some(
            (segment, index) =>
              index !== 0 && segment.x === head.x && segment.y === head.y
          )
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // check collision with food
        if (head.x === food.x && head.y === food.y) {
          setScore((prevScore) => prevScore + 1);
          setFood({
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
          });
          setSpeed((prevSpeed) => (prevSpeed > 50 ? prevSpeed - 5 : prevSpeed));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameLoop = setInterval(moveSnake, speed);
    return () => clearInterval(gameLoop);
  }, [direction, food, gameOver, speed]);

  useEffect(() => {
    if (!gameOver) {
      setScore((prevScore) => prevScore + 1);
    }
  }, []);

  const renderBoard = () => {
    const board = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        let cell;
        if (
          snake.some((segment) => segment.x === x && segment.y === y)
        ) {
          // snake body
          const isHead = snake[0].x === x && snake[0].y === y;
          cell = (
            <div
              key={`${x}-${y}`}
              className={`cell ${isHead ? 'head' : 'snake'}`}
            />
          );
        } else if (food.x === x && food.y === y) {
          // food
          cell = <div key={`${x}-${y}`} className="cell food" />;
        } else {
          // empty cell
          cell = <div key={`${x}-${y}`} className="cell" />;
        }
        board.push(cell);
      }
    }

    return board;
  };

  return (
    <div className="game-container">
      <h1>Snake Game</h1>
      <div className="score">Score: {score}</div>
      <div className="board">{renderBoard()}</div>
      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Press F5 to restart</p>
        </div>
      )}
    </div>
  );
}

export default SnakeGame;