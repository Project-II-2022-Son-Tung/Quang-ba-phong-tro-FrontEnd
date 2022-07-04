import React from "react";
import FilterBar from './components/ProvinceBar/FilterBar'

const TopBar =(props)=>{

  return(

    <>
    <FilterBar onFilter={props.onFilter}/>
</>
  )

}

export default TopBar;
