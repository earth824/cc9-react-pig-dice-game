import './App.css';
import Header from './components/Header';
import PlayerScore from './components/PlayerScore';
import DiceScore from './components/DiceScore';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <PlayerScore name="1" active />
        <DiceScore />
        <PlayerScore name="2" />
      </div>
    </div>
  );
}

export default App;
