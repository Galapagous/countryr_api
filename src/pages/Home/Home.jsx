import React, { useEffect, useState } from 'react'
import './home.scss'
import Moon from '../../assets/moon.png'

import DarkChevron from '../../assets/dark-chevron.png'
import Search from '../../assets/dark-search.png'
import Card from '../../component/Cards/Card'
import AllCountry from '../../assets/data'
import Navbar from '../../component/Navbar/Navbar'

function Home() {
    const [showFilter, setShowFilter] = useState(false)
    const [countries, setCountries] = useState([])
    const [allCountries, setAllCountries] = useState([])
    // const [theme, setThemes] = useState('dark')

    useEffect(()=>{
        // make an API call
        const getCountries = async()=>{
            let allCountry = await AllCountry
            setCountries(allCountry)
            setAllCountries(allCountry)
        }
        getCountries()
    },[])

    // handling filter selection
    const handleFilter = (e)=>{
        let selectedRegion = e.target.innerHTML
        let filteredCountry = allCountries.filter(eachCountry=>{
            return (eachCountry.region === selectedRegion)
        })
        setCountries(filteredCountry)
        setShowFilter(!showFilter)
    }

    // handing search 
    const handleSearch = (e)=>{
        const searchValue = e.target.value.toLowerCase()
        let foundCountries = allCountries.filter(eachCountry=>{
            return(eachCountry.name.toLowerCase().includes(searchValue))
        })
        setCountries(foundCountries)
    }
  return (
    <div className={`home`}>
        <div className="hero">
            <Navbar/>
            <div className="top-hero">
                <div className="search">
                    <input onChange={handleSearch} type="text" placeholder='Search for a country...'/>
                    <img src={Search} alt="search icon" />
                </div>
                <div className='filter'>
                    <div className='filter-select'> 
                        <span>Filter by Region</span>
                        <img src={DarkChevron} alt="chevron" onClick={()=>{setShowFilter(!showFilter)}}/>
                    </div>
                    <div className='filter-values'>
                        {showFilter && <ul>
                            <li onClick={handleFilter}>Africa</li>
                            <li onClick={handleFilter}>Americas</li>
                            <li onClick={handleFilter}>Asia</li>
                            <li onClick={handleFilter}>Europe</li>
                            <li onClick={handleFilter}>Oceania</li>
                        </ul>}
                    </div>
                </div>
            </div>
            <div className="hero-main">
                {
                    countries.map(eachCountry=>{
                        return(
                            <Card key={eachCountry.name} info = {eachCountry} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home