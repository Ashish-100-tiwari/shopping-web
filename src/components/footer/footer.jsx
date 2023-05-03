import React from 'react'
import {AiFillYoutube,AiFillLinkedin,AiFillGithub} from "react-icons/ai"
const footer = () => {
  return (
    <section className='footer'>

    <div>
        <h2>bhai shop krlo </h2>  
        <p>we have branded items from sadar bazar and chandni chowk </p>
        <br/>
        <em>shop now pay later</em> 
        <strong>All right received @shop krlo</strong> 
    </div>

    <aside>
        <p> Follow Us</p>
        <a href='https://youtube.com/'><AiFillYoutube/></a>
        <a href='https://www.linkedin.com/in/ashish-tiwari-57303a217/'><AiFillLinkedin/></a>
        <a href='https://github.com/Ashish-100-tiwari'><AiFillGithub/></a>
    </aside>

    </section>
  )
}

export default footer