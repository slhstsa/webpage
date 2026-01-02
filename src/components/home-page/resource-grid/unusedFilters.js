import Filter from './filter'
import {useState} from 'react'
function Unfilters({unusedFilters, setUnusedFilters, usedFilters, setUsedFilters}){

  return(
    <div>
      {unusedFilters?.map((filter) =>{
        return(
          <Filter 
            category={filter.category}
            state={filter.state}
            unusedFilters={unusedFilters}
            setUnusedFilters={setUnusedFilters}
            usedFilters={usedFilters}
            setUsedFilters={setUsedFilters}
          />
        );
      })}
    </div>
    
  );
}


export default Unfilters;