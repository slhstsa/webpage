import './filter.css'
function Filter({category}){
  return(
    <button class="filter-circle">
      {category}
    </button>
  );
}

export default Filter;