import React, { useState } from 'react';

const api={
    key:'4e184a952056e53aad15db71a137bd01',
    base:'https://api.openweathermap.org/data/2.5/'
}

 function WeatherApp() {
   

const [query,setQuery]=useState('');
const [weather,setWeather]=useState({});

const search=e=>{
    if(e.key==='Enter'){
        fetch(`${api.base}weather?q=${query}&units=matric&APPID=${api.key}`).
        then(res=>res.json()).
        then(result=>{
            setWeather(result);
    
            setQuery('');
            console.log(result);
        });
    }

}

  const dateBuilder=(d)=>{
      let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"];
      let days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  
      
  }
  
    
    return (
        <div className="app">
            <main>
                <div className="search-box">
                    <input
                    type= "text"
                    className="search-bar"
                    placeholder="search..."
                    onChange={e=>setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                    />
        
                </div>
                {(typeof weather.main !='undefined')?(
                <div>
                    <div className="location-box">
    <div className="location">{weather.name },{weather.sys.country}</div>
                    <div className='date'>{dateBuilder(new Date())}</div>
                    </div>
                <div className="weather-box">
                    <div className="temp">
                        {Math.round(weather.main.temp/8)}°c
                    </div>
                <div className="weather">{weather.weather[0].main}</div>

                </div>

          </div>
                 ):('') }
            </main>
            
        </div>
    )
}
export default WeatherApp;