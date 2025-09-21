import './WeatherInfoFiveDays.css'

function WeatherInfoFiveDays({weatherFiveDays}){

  const dailyForecast = {

  }

  for(let forecast of weatherFiveDays.list){
    const date = new Date(forecast.dt * 1000).toLocaleDateString()
    if(!dailyForecast[date]){
      dailyForecast[date] = forecast
    }
  }
  const nextFiveDays = Object.values(dailyForecast).slice(1,6)

  function convertDate(date){
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday:'long', day:'2-digit'})
    return newDate
  }

  return (
   
  <div className='container-wea'> 
    <h3>Previsão dos proximo 5 dias</h3>
    <div className='weather-list'>
      {nextFiveDays.map(forecast =>(
        <div key={forecast.dt} className='weather-item'>
            <p className='date'>{convertDate(forecast)}</p>
            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}  />
            <p className='description'>{forecast.weather[0].description}</p>
            <p>{Math.round(forecast.main.temp_min)}°C Min / {Math.round(forecast.main.temp_max)}°C Max</p>
        </div>
        
      ))}
    </div>
  </div>
  )
}

export default WeatherInfoFiveDays