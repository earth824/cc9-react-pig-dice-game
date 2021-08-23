import './App.css';
import DiceScore from './components/DiceScore';
import Header from './components/Header';
import PlayerScore from './components/PlayerScore';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <PlayerScore />
        <DiceScore />
        <PlayerScore />
      </div>
    </>
  );
}

export default App;
