import React from 'react'

import './Home.css'

const Home = () => {

  document.body.style.backgroundColor = "rgb(105, 47, 74)";

  return (
    <div className='home-container'>
      <div className='home-text'>
        <p>Hi!</p>
        <p>My name is <span>Trung Lam</span></p>
        <p>I am a <span>Generalist Programmer</span></p>
        <p><span>HTML, CSS, JavaScript, Python, C++</span></p>
        <p><span>Unity, Godot</span></p>
      </div>
    </div>
  )
}

export default Home