import { useState, useRef } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

    async function searchCity(){
    console.log(inputRef.current.value)
    const city = inputRef.current.value
    const key = "0ba11199028d166431e519372816ff08"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  
    try {
      const data = await axios.get(url)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
<div>
  <h1>Previsão do Tempo</h1>
  <input ref={inputRef} type="text" placeholder="Digite a cidade"></input>
  <button onClick={searchCity}>Buscar</button>
</div>
  )
}

export default App
