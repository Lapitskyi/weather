import React from 'react';
import './WeatherFooter.scss'


const WeatherFooter = (props) => {

    return (
        <div className="weather__footer">
            <ul className="weather__footer-list">

                {props.forecastWeather?.map(item =>
                    item.list.map(list=>
                        <li className="weather__footer-item" key={list.dt}>
                            <h4 className="weather__footer-title"> {new Date(list.dt * 1000).toLocaleString()}</h4>
                            <img className="weather__footer-img"
                                 src={`https://openweathermap.org/img/wn/${list.weather[0]['icon']}@2x.png`} alt=""/>
                            <div className="weather__footer-temperature">{`${Math.round(list.main.temp - 273)} \u00B0C /
                       ${Math.round((list.main.temp - 273.15) * 9 / 5 + 32)}\u00B0F`

                            }</div>
                        </li>


                    )

                )}


            </ul>
        </div>
    )
}


export default WeatherFooter;