import React from 'react';
import './WeatherFooter.scss'


const WeatherFooter = (props) => {
    return (
        <div className="weather__footer">
            <ul className="weather__footer-list">
                <li className="weather__footer-item">
                    <h4 className="weather__footer-title"> MONDAY</h4>
                    <img className="weather__footer-img" src="https://via.placeholder.com/80" alt=""/>
                    <div className="weather__footer-temperature">22С/72F</div>
                </li>
                <li className="weather__footer-item">
                    <h4 className="weather__footer-title"> MONDAY</h4>
                    <img className="weather__footer-img" src="https://via.placeholder.com/80" alt=""/>
                    <div className="weather__footer-temperature">22С/72F</div>
                </li>
                <li className="weather__footer-item">
                    <h4 className="weather__footer-title"> MONDAY</h4>
                    <img className="weather__footer-img" src="https://via.placeholder.com/80" alt=""/>
                    <div className="weather__footer-temperature">22С/72F</div>
                </li>
                <li className="weather__footer-item">
                    <h4 className="weather__footer-title"> MONDAY</h4>
                    <img className="weather__footer-img" src="https://via.placeholder.com/80" alt=""/>
                    <div className="weather__footer-temperature">22С/72F</div>
                </li>
                <li className="weather__footer-item">
                    <h4 className="weather__footer-title"> MONDAY</h4>
                    <img className="weather__footer-img" src="https://via.placeholder.com/80" alt=""/>
                    <div className="weather__footer-temperature">22С/72F</div>
                </li>

            </ul>
        </div>
    )
}


export default WeatherFooter;