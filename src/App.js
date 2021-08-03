import './App.css';
import Header from './components/Header';
import PlayerScore from './components/PlayerScore';
import DiceScore from './components/DiceScore';
import { useState } from 'react';

function App() {
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  // const [diceScore, setDiceScore] = useState(1);
  // const [roundScore, setRoundScore] = useState(0);

  const detectClickNewBtn = () => {
    setPlayerScore([0, 0]);
    setCurrentPlayer(0);
  };

  return (
    <div>
      <Header detectClickNewBtn={detectClickNewBtn} />
      <div className="container">
        <PlayerScore name="1" active={currentPlayer === 0} score={playerScore[0]} />
        <DiceScore
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          playerScore={playerScore}
          setPlayerScore={setPlayerScore}
        />
        <PlayerScore name="2" active={currentPlayer === 1} score={playerScore[1]} />
      </div>
    </div>
  );
}

export default App;
