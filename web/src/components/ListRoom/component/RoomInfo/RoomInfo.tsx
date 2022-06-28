import React from "react";
import './index.css'
import images from "src/assets/images";
const RoomInfo=(props)=>{


 const {title} = props





  return(
    <div className="container">
      <div className="image_container">
        <img className="img" src={images.room}/>
      </div>
      <div className="info_container">
        <div className="title"><a className="title_text">{title}</a></div>

      </div>




    </div>
  )

}
export default RoomInfo;
