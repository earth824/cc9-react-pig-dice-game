function Header(props) {
  return (
    <div className="header">
      <button className="btn" onClick={props.reset}>
        New Game
      </button>
    </div>
  );
}

export default Header;
