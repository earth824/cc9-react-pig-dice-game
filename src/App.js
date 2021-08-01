import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <button className="btn">New Game</button>
      </header>
      <div className="container">
        <div className="card active">
          <h1>Player 1</h1>
          <p className="player-score">0</p>
        </div>
        <div className="card">
          <div className="row">
            <div className="btn btn-danger btn-fw">Roll</div>
            <div className="btn btn-success btn-fw">Keep</div>
          </div>
          <div className="row">
            <div className="dice-score">0</div>
          </div>
          <div className="row">
            <p className="round-score">Round Score: 0</p>
          </div>
        </div>
        <div className="card">
          <h1>Player 2</h1>
          <p className="player-score">0</p>
        </div>
      </div>
    </>
  );
}

export default App;
