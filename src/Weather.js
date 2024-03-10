import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props){
  const [weatherData,setWeatherData]=useState({});
  const [temperature,setTemperature]= useState(null);
function handleResponse(response){
  console.log(response.data);
  setWeatherData({
    ready: true,
    city: response.data.city,
    temperature: response.data.temperature.current,
    wind: response.data.wind.speed,
    description: response.data.condition.description,
    icon: response.data.condition.icon,
    iconUrl: response.data.condition.icon_url,
    humidity: response.data.temperature.humidity,
    date: new Date(response.data.time * 1000)
  })
  }
if (weatherData.ready){
  return(
    <div className="Weather">
      <form>
  <div className="row">
      <div className="col-9">
      <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
      </div>
      <div className="col-3">       
       <input type="submit" value="Search" className="btn btn-primary w-100"/>
  </div>
  </div>
      </form>
       <h1>{weatherData.city}</h1>
       <ul>
          <li>
            <FormattedDate date={weatherData.date}/>
          </li>
          <li>{weatherData.description}</li>
       </ul>
       <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.iconUrl} alt={weatherData.icon} className="float-left"/>
            <div className="float-left">
             <span className="temperature">{weatherData.temperature}</span>
             <span className="unit">°C</span> 
            </div>
            </div> 
          </div>
          <div className="col-6">
              <ul>
                  <li>Precipitation: 0%</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} mph</li>
              </ul>
          </div>    
       </div>
      
     </div>)  ;
  }
else {const apiKey= "e4ada4d5033f1bdt8o356e4c1f68a52f";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return ("Loading...");
}
}