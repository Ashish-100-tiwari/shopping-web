import React from 'react'
import founder from "../../assets/founder.jpeg"

import {AiFillYoutube,AiFillLinkedin,AiFillGithub} from "react-icons/ai"

const About = () => {
  return (
    <div className="About">
       <div>
       <img src={founder} alt='founder'height={200} width={200}/>
        <h3>Ashish Tiwari</h3>
        <p>
            This side ashish Tiwari founder of shop krlo
        </p>
        <p>Follow us</p>
        <div>
            <a href='https://youtube.com/'><AiFillYoutube/></a>
            <a href='https://www.linkedin.com/in/ashish-tiwari-57303a217/'><AiFillLinkedin/></a>
            <a href='https://github.com/Ashish-100-tiwari'><AiFillGithub/></a>
        </div>
       </div>
       
    </div>
  )
}

export default About