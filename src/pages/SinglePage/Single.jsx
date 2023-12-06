import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Country from '../../assets/country.png'
import ArrowWHite from '../../assets/arrowWhite.png'
import ArrowDark from '../../assets/arrowDark.png'
import './single.scss'
import { Link, useParams } from 'react-router-dom'
import AllCountry from '../../assets/data'
import { themeContext } from '../../themeContext/themeContext'
import {useContext} from 'react'

function Single() {
    const currentCountry = useParams()
    const [countryData, setCountryData] = useState()
    const [borders, setBorders] = useState('')
    const {theme} = useContext(themeContext)
    useEffect(()=>{
        const fetchCountry = async()=>{
            let countryInfo = await AllCountry.filter(eachCountry=>{
                return(
                    eachCountry.numericCode === currentCountry.name
                )
            })
            let allBorders = []
            countryInfo[0].borders && countryInfo[0].borders.forEach(eachBorder=>{
                let countryFullName = AllCountry.filter(eachCountry=>{
                    return(eachCountry.alpha3Code === eachBorder)
                })
                allBorders.push(countryFullName[0].name)
            })
            setBorders(allBorders)
            setCountryData(countryInfo[0])
        }
        fetchCountry()
    },[])
  return (
    <div className='single-main'>
        <Navbar/>
        <div className={`single-${theme}`}>
            <div className="topRegion">
                <Link to='/'>
                    {theme === 'light' ? <img src={ArrowDark} alt="back arrow" /> : <img src={ArrowWHite} alt="back arrow" />}
                    Back
                </Link>
            </div>
            {
                countryData && <div className="contentArea">
                    {countryData.flags.svg && <img src={countryData.flags.svg} alt="country" />}
                <div className="rightSingle">
                    <h3>{countryData.name}</h3>
                    <div className="info">
                        <div className="leftInfo">
                            <div className="eachInfo">
                                <span>Native Name:</span>
                                <span>{countryData.nativeName}</span>
                            </div>
                            <div className="eachInfo">
                                <span>Population:</span>
                                <span>{countryData.population}</span>
                            </div>
                            <div className="eachInfo">
                                <span>Region:</span>
                                <span>{countryData.region}</span>
                            </div>
                            <div className="eachInfo">
                                <span>Sub Region:</span>
                                <span>{countryData.subregion}</span>
                            </div>
                            <div className="eachInfo">
                                <span>Capital:</span>
                                <span>{countryData.capital}</span>
                            </div>
                        </div>
                        <div className="rightInfo">
                            <div className="eachInfo">
                                <span>Top Level Domain:</span>
                                <span>{countryData.topLevelDomain}</span>
                            </div>
                            <div className="eachInfo">
                                <span>Currencies:</span>
                                <span>{countryData.currencies[0].code}</span>
                            </div>
                            <div className="eachInfo">
                                <span>Languages:</span>
                                {countryData.languages.map(eachCountry=>{
                                    return(<span key={eachCountry.name} className='langauge'>{eachCountry.name}</span>)
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="bottonInfo">
                        <span>Border Countries:</span>
                        <div className="bottonElement">
                            {
                                countryData.borders ? (borders.map(eachBorder=>{
                                    return(
                                        <span key={eachBorder}>{eachBorder}</span>
                                    )
                                })) : <span>N/A</span>
                            }
                        </div>
                    </div>
                </div>
                </div>
            }
                
        </div>
    </div>
  )
}

export default Single