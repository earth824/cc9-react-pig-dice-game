function DiceScore() {
  return (
    <div className="card">
      <div className="row">
        <button className="btn btn-danger btn-fw">Roll</button>
        <button className="btn btn-success btn-fw">Keep</button>
      </div>
      <div className="row">
        <div className="dice-score">0</div>
      </div>
      <div className="row">
        <p className="round-score">Round Score: 0</p>
      </div>
    </div>
  );
}

export default DiceScore;
