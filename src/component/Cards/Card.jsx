import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
import { themeContext } from '../../themeContext/themeContext'
import {useContext} from 'react'


function Card({info}) {
    const {theme} = useContext(themeContext)
  return (
    <div className={`card-${theme}`}>
        <Link to={`/single/${info.numericCode}`}>
            <img src={info.flags.svg} alt="country" />
        </Link>
        <div className='info'>
            <h3>{info.name}</h3>
            <div className='info-element'>
                <span>Population</span>
                <span>{info.population}</span>
            </div>
            <div className='info-element'>
                <span>Region</span>
                <span>{info.region}</span>
            </div>
            <div className='info-element'>
                <span>Capital</span>
                <span>{info.capital}</span>
            </div>
        </div>
    </div>
  )
}

export default Card