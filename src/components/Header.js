function Header(props) {
  const handleClickNew = () => {
    props.detectClickNewBtn();
  };

  return (
    <div className="header">
      <button className="btn" onClick={handleClickNew}>
        New Game
      </button>
    </div>
  );
}

export default Header;
