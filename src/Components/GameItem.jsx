import React from 'react';

function GameItem({ game, onPlayNow }) {
  return (
    <div className="game-item">
      <img src={game.imageUrl} alt={game.name} />
      <h3>{game.name}</h3>
      <button onClick={() => onPlayNow(game.playUrl)}>Play Now</button>
    </div>
  );
}

export default GameItem;