import React from 'react';
import './WeatherFooter.scss'


const WeatherFooter = (props) => {


    let arr = props.forecastWeather?.filter((_, index) => index % 8 === 0);

    return (
        <>
            {
                props.forecastWeather ?
                    <div className="weather__footer">
                        <ul className="weather__footer-list">
                            {
                                arr.map((list) =>

                                    <li className="weather__footer-item" key={list.dt}>
                                        <h4 className="weather__footer-title">
                                            {new Date(list.dt * 1000).toLocaleString('en', {weekday: 'long'})}
                                            <span
                                                style={{display: "block"}}>{new Date(list.dt * 1000).toLocaleDateString()}</span>
                                            <span>{list.weather[0]['description']}</span>
                                        </h4>
                                        <img className="weather__footer-img"
                                             src={`https://openweathermap.org/img/wn/${list.weather[0]['icon']}@2x.png`}
                                             alt=""/>
                                        <div className="weather__footer-temperature">
                                            {`${Math.round(list.main.temp - 273)} \u00B0C /
                                ${Math.round((list.main.temp - 273.15) * 9 / 5 + 32)}\u00B0F`}
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    : null
            }
        </>
    )
}


export default WeatherFooter;