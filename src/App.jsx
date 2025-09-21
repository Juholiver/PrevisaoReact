import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import WeatherInfoFiveDays from './components/WeatherInfoFiveDays/WeatherInfoFiveDays'

import './App.css'

function App() {
  const [weather, setWeather] = useState()
  const [weatherFiveDays, setWeatherFiveDays] = useState()
  const inputRef = useRef()

    async function searchCity(){
    const city = inputRef.current.value
    const key = "0ba11199028d166431e519372816ff08"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
  
    try {
      const apiInfo = await axios.get(url)
      const apiInfoFiveDays = await axios.get(urlFiveDays)
      setWeather(apiInfo.data)
      setWeatherFiveDays(apiInfoFiveDays.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
<div className='container'>
  <h1>Previsão do Tempo</h1>
  <input ref={inputRef} type="text" placeholder="Digite a cidade"></input>
  <button onClick={searchCity}>Buscar</button>

  {weather && <WeatherInfo weather={weather} />}
  {weatherFiveDays && <WeatherInfoFiveDays weatherFiveDays={weatherFiveDays} />}
</div>
  )
}

export default App
