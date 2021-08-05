import './App.css';
import Header from './components/Header';
import PlayerScore from './components/PlayerScore';
import DiceScore from './components/DiceScore';
import { useState } from 'react';

function App() {
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);
  const [playerScore, setPlayerScore] = useState([0, 0]);
  // playerScore[currentPlayer] if currentPlayer = 0 : playerScore[0] , if currentPlayer = 1 : playerScore[1]
  // 0 => player One is current player, 1 => player Two is current player
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const rollDice = () => {
    const newDiceScore = Math.floor(Math.random() * 6) + 1; // 1,2,3,4,5,6
    setDiceScore(newDiceScore);
    if (newDiceScore !== 1) {
      setRoundScore(curRoundScore => curRoundScore + newDiceScore);
    } else {
      const newCurrentPlayer = currentPlayer === 0 ? 1 : 0;
      setCurrentPlayer(newCurrentPlayer);
      setRoundScore(0);
    }
  };

  const keepScore = () => {
    const newPlayerScore = [...playerScore]; // [9, 0] if currentPlayer = 0
    newPlayerScore[currentPlayer] = newPlayerScore[currentPlayer] + roundScore; // newPlayerScore = [15, 0]
    setPlayerScore(newPlayerScore);
    setRoundScore(0);
    setCurrentPlayer(curPlayer => (curPlayer === 0 ? 1 : 0));
    // setCurrentPlayer(curPlayer => (!curPlayer ? 1 : 0));
  };

  const reset = () => {
    setRoundScore(0);
    setDiceScore(1);
    setCurrentPlayer(0);
    setPlayerScore([0, 0]);
  };

  return (
    <div>
      <Header reset={reset} />
      <div className="container">
        <PlayerScore name="One" active={currentPlayer === 0} score={playerScore[0]} />
        {/* PlayerScore({ name: 'One', active: true, score=0 })    */}
        <DiceScore
          diceScore={diceScore}
          roundScore={roundScore}
          setDiceScore={setDiceScore}
          rollDice={rollDice}
          setRoundScore={setRoundScore}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          keepScore={keepScore}
        />
        <PlayerScore name="Two" active={currentPlayer === 1} score={playerScore[1]} />
        {/* PlayerScore({ name: 'Two', active: false, score=0 })    */}
      </div>
    </div>
  );
}

export default App;
