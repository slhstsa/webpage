import './search.css';


function Search() {
  return (
    <div class="search-bar">
      <input class="bar" type="text" placeholder="Search a resource" />
      <img class="magnifying-img" src="images/searchicon.svg" alt="Magnifying glass"/>
    </div>
  );
}

export default Search;