import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {

  return (
    <>
      <div className='header-container'>
        <div className='home-name'>Trung Lam</div>
        <div className='header-links'>
          <li><Link to='/' className='home-page-link'>Home</Link></li>
          <li><Link to='/experience' className='exp-page-link'>Experience</Link></li>
          <li><Link to='/projects' className='proj-page-link'>Projects</Link></li>
        </div>
      </div>
    </>
    
  )
}

export default Header