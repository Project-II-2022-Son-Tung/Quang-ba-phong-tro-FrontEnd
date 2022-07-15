import React from "react";
import FilterBar from './components/ProvinceBar/FilterBar'

const TopBar =(props)=>{

  return(

    <div style={{marginTop:'20px'}}>
    <FilterBar onFilter={props.onFilter}/>
</div>
  )

}

export default TopBar;
