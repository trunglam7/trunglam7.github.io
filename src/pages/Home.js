import React from 'react'

import './Home.css'

const Home = () => {

  document.body.style.backgroundColor = "rgb(105, 47, 74)";

  return (
    <div className='home-container'>
      <div className='home-text'>
        <p>Hi!</p>
        <p>My name is <span>Trung Lam</span></p>
        <p>I am a <span>Front-End Web Developer</span></p>
        <p>Languages I know: <span>HTML, CSS, JavaScript, Python, C++</span></p>
        <p>Tools I know: <span>Unity, Godot, React.js</span></p>
      </div>
    </div>
  )
}

export default Home