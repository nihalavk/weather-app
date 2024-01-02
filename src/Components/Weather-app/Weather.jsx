import React, { useState } from 'react'
import './Weather.css'

import search_icon from '../Images/weather-forecast.png'
import cloud_icon from '../Images/cloudy.png'
import drizzle_icon from '../Images/drizzle.png'
import humidity_icon from '../Images/humidity.png'
import rain_icon from '../Images/raining.png'
import snow_icon from '../Images/snow.png'
import storm_icon from '../Images/storm.png'
import sun_icon from '../Images/sun.png'
import wind_icon from '../Images/wind.png'
function Weather() {
    
        let api_key="6840817c9758d75c99dd8be24b340003";
        const [wicon,setWicon]=useState(cloud_icon)
        const search =async()=>{
            const element=document.getElementsByClassName("cityInput")
            if(element[0].value===""){
                return 0;
            }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let responce=await fetch(url)
        let data=await responce.json()
        // const humidity=document.getElementsByClassName("humidity-percen")
        const wind=document.getElementsByClassName("wind-rate")
        const temperature=document.getElementsByClassName("weather-temp")
        const location=document.getElementsByClassName("weather-location")
        // humidity[0].innerHTML=data.main.humidity+"%"
        // wind[0].innerHTML=data.wind.speed+"km/hr"
        temperature[0].innerHTML=data.main.temp+"°C"
        location[0].innerHTML=data.name

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" )
        {
            setWicon(sun_icon)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n" )
        {
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" )
        {
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n" )
        {
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n" )
        {
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" )
        {
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n" )
        {
            setWicon(snow_icon)
        }
        else{
            setWicon(sun_icon)
        }

        }


   
  return (
    <div>
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search' />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} style={{height:"30px",width:"30px"}} />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon}style={{height:"100px",width:"100px"}} />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">london</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} style={{height:"60px",width:"60px"}} className='icon'/>
                    <div className="data">
                        <div className="humidity-percen">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} style={{height:"60px",width:"60px"}} className='icon'/>
                    <div className="data">
                        <div className="wind-rate">18km/hr</div>
                        <div className="text">Wind speed</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather