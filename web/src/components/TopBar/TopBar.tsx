import React from "react";
import SelectBar from  './components/SelectBar/SelectBar'
import ProvinceBar from './components/ProvinceBar/ProvinceBar'

const TopBar =(props)=>{

  return(

    <>
    <ProvinceBar onFilter={props.onFilter}/>
</>
  )

}

export default TopBar;
