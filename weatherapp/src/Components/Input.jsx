import React from 'react'
import { useWeather } from '../Context/Weather'

const Input = () => {
    const weather = useWeather();
  return (
<input 
className='input-field'
placeholder = "Search here"

onChange = {(e) =>weather.setSearchCity(e.target.value)}

value = {weather.searchCity}/>
  )
}

export default Input