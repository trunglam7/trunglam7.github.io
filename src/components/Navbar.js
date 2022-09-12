import React, {useState} from 'react'
import {FaGithub, FaLinkedinIn, FaBehance} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

  const [viewNav, setViewNav] = useState(true)

  const checkWidth = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let scroll_y = window.scrollY
    if (vw <= 800 && scroll_y >= 50){
      setViewNav(false)
    }
    else{
      setViewNav(true)
    }
  }

  window.addEventListener('scroll', checkWidth)
  window.addEventListener('resize', checkWidth)

  return (
    <div className={viewNav ? 'navbar show' : 'navbar hide'}>
        <div className='navbar-container'>
            <div className='button-container'>
              <div className='btn-name-container'>
                <button className='nav-btn' onClick={() => window.open('https://github.com/trunglam7')}><FaGithub /></button>
                <div className='button-name'>Github</div>
              </div>
              <div className='btn-name-container'>
                <button className='nav-btn' onClick={() => window.open('https://www.linkedin.com/in/trung-lam-8190a0177/')}><FaLinkedinIn /></button>
                <div className='button-name'>Linkedin</div>
              </div>
              <div className='btn-name-container'>
                <button className='nav-btn' onClick={() => window.open('https://www.behance.net/trunglam4')}><FaBehance /></button>
                <div className='button-name'>Behance</div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar