import { useContext } from 'react';
import { ScoreContext } from '../contexts/scoreContext';

function DiceScore() {
  const context = useContext(ScoreContext); // { state, dispatch }
  // const {
  //   state: { diceScore, roundScore },
  //   dispatch
  // } = useContext(ScoreContext);
  return (
    <div className="card">
      <div className="row">
        <div className="btn btn-danger btn-fw" onClick={() => context.dispatch({ type: 'ROLL' })}>
          {/* <div className="btn btn-danger btn-fw" onClick={() => dispatch({ type: 'ROLL' })}> */}
          Roll
        </div>
        <div className="btn btn-success btn-fw" onClick={() => context.dispatch({ type: 'KEEP' })}>
          {/* <div className="btn btn-success btn-fw" onClick={() => dispatch({ type: 'KEEP' })}> */}
          Keep
        </div>
      </div>
      <div className="row">
        <div className="dice-score">{context.state.diceScore}</div>
        {/* <div className="dice-score">{diceScore}</div> */}
      </div>
      <div className="row">
        <p className="round-score">Round Score: {context.state.roundScore}</p>
        {/* <p className="round-score">Round Score: {roundScore}</p> */}
      </div>
    </div>
  );
}

export default DiceScore;
