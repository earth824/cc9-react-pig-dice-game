import { useContext, useEffect } from 'react';
import { ScoreContext } from '../contexts/scoreContext';
import PlayerScore from './PlayerScore';
import DiceScore from './DiceScore';

function Container() {
  const context = useContext(ScoreContext); // { state, dispatch }
  // const {
  //   state: { playerScores, currentPlayer }
  // } = useContext(ScoreContext);
  // state
  // {
  //   playerScores: [0, 0],
  //   currentPlayer: 0,
  //   diceScore: 1,
  //   roundScore: 0
  // };

  useEffect(() => {
    if (context.state.playerScores[context.state.currentPlayer] + context.state.roundScore > 20) {
      context.dispatch({ type: 'KEEP' });
    }
  }, [context.state.roundScore]);

  useEffect(() => {
    if (context.state.playerScores[context.state.currentPlayer] + context.state.roundScore > 20) {
      alert(`Player ${context.state.currentPlayer === 0 ? 'One' : 'Two'} win`);
    }
  }, [context.state.isEnd]);

  return (
    <div className="container">
      <PlayerScore name="One" score={context.state.playerScores[0]} active={context.state.currentPlayer === 0} />
      <DiceScore />
      <PlayerScore name="Two" score={context.state.playerScores[1]} active={context.state.currentPlayer === 1} />
    </div>
  );
}

export default Container;
