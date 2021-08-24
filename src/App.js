import './App.css';
// import { INITIAL_SCORE, scoreReducer } from './contexts/scoreContext';
import { ScoreProvider } from './contexts/scoreContext';
import Header from './components/Header';
import Container from './components/Container';

function App() {
  // const [state, dispatch] = useReducer(scoreReducer, INITIAL_SCORE);
  return (
    // <ScoreContext.Provider value={{ state, dispatch }}>
    //   <Header />
    //   <div className="container">
    //     <PlayerScore />
    //     <DiceScore />
    //     <PlayerScore />
    //   </div>
    // </ScoreContext.Provider>

    <ScoreProvider>
      <Header />
      <Container />
    </ScoreProvider>
  );
}

export default App;
