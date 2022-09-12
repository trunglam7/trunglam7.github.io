import React from 'react'
import './Experience.css'

const Experience = () => {

  document.body.style.backgroundColor= "rgb(80, 51, 119)";

  return (
    <div className='experience-container'>
      <div className='experience-category'>
        Volunteer Experience
      </div>
      <ul>
        <li>
          <div className='experience-section'>
            <h2>Game Developer - Tribal III Inc.</h2>
            <h3>June 2022 - August 2022</h3>
            <h3>Description: Assist in a scrum environment in the front-end creation of a game.</h3>
          </div>
        </li>
      </ul>

      <div className='experience-category'>
        Education
      </div>
      <ul>
        <li>
          <div className='experience-section'>
            <h2>Computer Science M.S. - University of California - Riverside</h2>
            <h3>January 2022 - Present</h3>
          </div>
        </li>
        <li>
          <div className='experience-section'>
            <h2>Computer Science B.S. - University of California - Riverside</h2>
            <h3>September 2019 - December 2021</h3>
          </div>
        </li>
      </ul>

      <div className='experience-category'>
        Certificates
      </div>
      <ul>
        <li>
          <div className='experience-section'>
            <h2> Google Data Analytics - Coursera</h2>
            <h3>Issued: July 2022</h3>
          </div>
        </li>
      </ul>
      
    </div>
  )
}

export default Experience