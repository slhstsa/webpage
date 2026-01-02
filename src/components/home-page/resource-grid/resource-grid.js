import './resource-grid.css';
import {useState} from 'react'
import Unfilter from './unusedFilters';
import CurrentFilters from './usedFilters';
import Filter from './filter'
import ResourceCard from './resource';
function Resources() {
  const [unusedFilter, setUnusedFilter] = useState([{
    category: 'Free',
    id: 1,
    state: 'unused'
  },{
    category: 'Nutritious',
    id: 2,
    state: 'unused'
  },{
    category: 'Costly',
    id: 3,
    state: 'unused'
  }]);


  
  const[usedFilter, setusedFilter] = useState([])
  
  const[resourceCardList, setCardList] = useState([
    ["Free"],
    ["Nutritious"],
    ["Costly"],
    ["Free", "Nutritious"],
    ["Hungry"]
  ])
  
  const totalCards = [
    ["Free"],
    ["Nutritious"],
    ["Costly"],
    ["Free", "Nutritious"],
    ["Hungry"]
  ]


  return(
    <>
      <div>
        {unusedFilter?.map((filter) =>{
          return(
            <Filter 
              category={filter.category}
              id={filter.id}
              state={filter.state}
              unusedFilters={unusedFilter}
              setUnusedFilters={setUnusedFilter}
              usedFilters={usedFilter}
              setUsedFilter={setusedFilter}
              resourceCardList = {resourceCardList}
              setCardList = {setCardList}
            />
          );
        })}
      </div>
      <div>
        {usedFilter?.map((filter) =>{
          return(
            <Filter 
              category={filter.category}
              state={filter.state}
              id={filter.id}
              unusedFilters={unusedFilter}
              setUnusedFilters={setUnusedFilter}
              usedFilters={usedFilter}
              setUsedFilter={setusedFilter}
              resourceCardList = {resourceCardList}
              setCardList = {setCardList}
              totalCards = {totalCards}
            />
          );
        })}
      </div>

      <div>
        {resourceCardList?.map((card) =>{
          return(
            <ResourceCard 
              categorylist= {card}
            />
          );
        })}
      </div>
    </>
  );
}

export default Resources;