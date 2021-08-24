import { createContext, useReducer } from 'react';

const INITIAL_SCORE = {
  playerScores: [0, 0],
  currentPlayer: 0,
  diceScore: 1,
  roundScore: 0,
  isEnd: false
};

// Action: ROLL, KEEP, RESET
const scoreReducer = (state, action) => {
  switch (action.type) {
    case 'ROLL': {
      const newDiceScore = Math.floor(Math.random() * 6) + 1;
      if (newDiceScore === 1) {
        // change player, reset round score to zero, update dice score
        return {
          ...state,
          // playerScores:
          // currentPlayer:
          // diceScore:
          // roundScore:
          currentPlayer: state.currentPlayer === 0 ? 1 : 0,
          diceScore: 1,
          roundScore: 0
        };
      } else {
        // update round score, update dice score
        return {
          ...state,
          diceScore: newDiceScore,
          roundScore: state.roundScore + newDiceScore
        };
      }
    }
    case 'KEEP': {
      // change current player, update player score, reset round score to zero
      const newPlayerScores = [...state.playerScores]; // [0, 0]
      newPlayerScores[state.currentPlayer] = newPlayerScores[state.currentPlayer] + state.roundScore;
      let currentPlayer = state.currentPlayer;
      if (newPlayerScores[state.currentPlayer] < 20) {
        currentPlayer = state.currentPlayer === 0 ? 1 : 0;
      }
      return {
        ...state,
        playerScores: newPlayerScores,
        currentPlayer: currentPlayer,
        roundScore: 0,
        isEnd: newPlayerScores[state.currentPlayer] > 20
      };
    }
    case 'RESET':
      return INITIAL_SCORE;
    default:
      return state;
  }
};

const ScoreContext = createContext();

function ScoreProvider({ children }) {
  const [state, dispatch] = useReducer(scoreReducer, INITIAL_SCORE);
  return <ScoreContext.Provider value={{ state: state, dispatch: dispatch }}>{children}</ScoreContext.Provider>;
}

export { INITIAL_SCORE, scoreReducer, ScoreProvider, ScoreContext };
