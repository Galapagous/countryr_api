import React, { useState } from 'react'
import './navbar.scss'
import MoonStroke from '../../assets/moon-stroke.png'
import MoonDark from '../../assets/moon.png'
import Sun from '../../assets/sun-icon.png'
import { themeContext } from '../../themeContext/themeContext'
import {useContext} from 'react'


function Navbar() {
  const {theme, setTheme} = useContext(themeContext)
  const handleSwitch = ()=>{
    theme === 'light' ? (setTheme('dark')) : (setTheme('light'))
  }
  return (
        <div className={`topBar-${theme}`}>
            <h2>Where in the world?</h2>
            <div className="themes">
               {theme === 'light' ? <div className='toggle' onClick={handleSwitch}><img src={MoonStroke} alt="Sun"/><span>Dark Mode</span></div> : <div className='toggle' onClick={handleSwitch}><img src={Sun} alt='Moon'/><span>Light Mode</span></div>}
                
            </div>
        </div>
  )
}

export default Navbar