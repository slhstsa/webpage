import './filter.css'
import {useState} from 'react'
function Filter({category, state, id, unusedFilters, setUnusedFilters, usedFilters, setUsedFilter, resourceCardList, setCardList, totalCards}){
  function switchFilter(){
    //This deals with the code to ADD a filter
    var alreadyHas = false
    usedFilters.forEach((filter) =>{
      if(filter.id === id){
        alreadyHas=true
      }
    }) 
    
    if(state === "unused" && !alreadyHas){
      
      setUsedFilter([...usedFilters, {
        category: category,
        id: id,
        state: 'used'
      }])

      var newArr = resourceCardList
      var index = 0

      while(index < newArr.length){
        if(!newArr[index].includes(category))
        {
          newArr.splice(index, 1)
          index--
        }
        index++
      }

      setCardList(newArr)
    }
    //This deals with the code to remove one
    else if(state === "used"){
      var currindex = 0
      var correctIndex = 0
      usedFilters.forEach((filter) =>{
        if(filter.id === id){
          correctIndex = currindex
        }
        currindex = currindex+1
      }) 

      var newFilters = usedFilters.toSpliced(correctIndex,1)
      setUsedFilter(newFilters)
      
      var newCards = []
      totalCards.forEach((card) =>
      {
        var add = true
        newFilters.forEach((filter) =>{
          if(!card.includes(filter.category)){
            add = false
          }
        })

        if(add){
          newCards.push(card)
        }
      })
      setCardList(newCards)
    }
  }
  
  return(
    <button onClick={switchFilter}class= {state}>
      {category}
    </button>
  );
}

export default Filter;