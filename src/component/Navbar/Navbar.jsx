import React, { useState } from 'react'
import './navbar.scss'
import MoonStroke from '../../assets/moon-stroke.png'
import MoonDark from '../../assets/moon.png'

function Navbar() {
  return (
        <div className="topBar">
            <h2>Where in the world?</h2>
            <div className="themes">
                <img src={MoonStroke} alt="moon"/> 
                <span>Dark Mode</span>
            </div>
        </div>
  )
}

export default Navbar