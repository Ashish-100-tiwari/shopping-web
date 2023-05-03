import React from 'react'
import images from "../../assets/images.js"
import CustomSlider from "../../assets/slider/custom.slider.js"
const Home= () => {
  return (
    <section className='home'>
      <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      </div>

    </section>
  )
}

export default Home