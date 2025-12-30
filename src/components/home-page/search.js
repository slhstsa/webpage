import "./search.css";

function Search() {
  return (
    <div className="search-bar">
      <img
        className="magnifying-img"
        src={`${process.env.PUBLIC_URL}/images/searchicon.svg`}
        alt="Magnifying glass"
      />
      <input className="bar" type="text" />
    </div>
  );
}

export default Search;
