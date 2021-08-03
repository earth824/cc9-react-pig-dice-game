import { useState } from 'react';

function DiceScore(props) {
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);
  // const { currentPlayer, setCurrentPlayer } = props;

  const handleClickRoll = () => {
    const newDiceScore = Math.floor(Math.random() * 6) + 1;
    if (newDiceScore !== 1) {
      setRoundScore(curRoundScore => curRoundScore + newDiceScore);
    } else {
      const newCurrentPlayer = props.currentPlayer === 0 ? 1 : 0;
      props.setCurrentPlayer(newCurrentPlayer);
      setRoundScore(0);
    }
    setDiceScore(newDiceScore);
  };

  const handleClickKeep = () => {
    const newScore = props.playerScore[props.currentPlayer] + roundScore;
    const newPlayerScore = [...props.playerScore];
    newPlayerScore[props.currentPlayer] = newScore;
    props.setPlayerScore(newPlayerScore);
    setRoundScore(0);
    const newCurrentPlayer = props.currentPlayer === 0 ? 1 : 0;
    props.setCurrentPlayer(newCurrentPlayer);
  };

  return (
    <div className="card">
      <div className="row">
        <button className="btn btn-danger btn-fw" onClick={handleClickRoll}>
          Roll
        </button>
        <button className="btn btn-success btn-fw" onClick={handleClickKeep}>
          Keep
        </button>
      </div>
      <div className="row">
        <div className="dice-score">{diceScore}</div>
      </div>
      <div className="row">
        <p className="round-score">Round Score: {roundScore}</p>
      </div>
    </div>
  );
}

export default DiceScore;
