import './image_slider.css'

import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import{LeftOutlined} from '@ant-design/icons';
function ImageSlider(props) {
  const images = props.images

  var listOfImages = []
  var a = images
  a.forEach(function (entry) {
    var singleImage = {}
    singleImage['link'] = entry.imageUrl
    singleImage['id'] = 'img'
    singleImage['imgWidth'] = entry.naturalWidth;
    listOfImages.push(singleImage)
  })
  const [sliderimgs, setSliderImgs] = useState(listOfImages)

  const [currentImg, setCurrentImg] = useState(0)

  const [margin, setMargin] = useState(0)

  const changeSlide = (right) => {
    if (right) {
      // if (margin == -500 * (sliderimgs.length - 1)) {
      //   setMargin(0)
      // }
      // else

      setCurrentImg(currentImg+ 1)
      console.log('currentImg.........'+ currentImg)

      console.log('ImgUrl.........'+ (listOfImages[currentImg]).imgWidth)

      {
        setMargin((e) => e - 500)
      }
    } else {
      // if (margin == 0) {
      //   setMargin(-500 * (sliderimgs.length - 1))
      // } else

      {
        setMargin((e) => e + 500)
      }
    }
  }

  // const onChangeSlider =(){

  // }

  return (
    <div className="slider">
      <div className="slide">
        <div className="content" style={{ marginLeft: margin }}>
          {sliderimgs.map((element) => {
            return <img style={{width:'500px'}} src={element.link} alt={''} />
          })}
        </div>
        <div className="but">
          <button className="pre" onClick={() => changeSlide(false)}><LeftOutlined/></button>
          <button className="next" onClick={() => changeSlide(true)}><LeftOutlined/></button>
        </div>
      </div>
    </div>
  )
}
export default ImageSlider
