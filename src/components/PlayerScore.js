function PlayerScore(props) {
  let classes = 'card';
  if (props.active) {
    classes += ' active'; // 'card active'
  }

  return (
    <div className={classes}>
      <h1>Player {props.name}</h1>
      <p className="player-score">{props.score}</p>
    </div>
  );
}

export default PlayerScore;
