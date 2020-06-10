import React, { useState  } from 'react';
import logo from './logo/main_logo.png'
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);
            console.log(data);
            console.log(query);
            
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <img className="logoImage" src={logo} alt={logo}/>
            <h3> Search your current city here and Get accurate weather details </h3>
            <input 
              type="text"
              className="search"
              placeholder="Search your city here"
              value={query}onChange={(e) => setQuery(e.target.value)}
              onKeyPress={search}
            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" 
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                          alt={weather.weather[0].description} 
                        />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default App;