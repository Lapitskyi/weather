import React from 'react';
import './ListLeft.scss';
import notImg from '../../../../../assets/images/notImg.png'

const ListLeft = (props) => {


    let dateWeather = new Date(props.currentWeather?.dt * 1000).toLocaleDateString();
    let dayWeather = new Date(props.currentWeather?.dt * 1000).toLocaleString('en', {weekday: 'long'});
    let tempWeatherCel = Math.round(props.currentWeather?.main.temp - 273);
    let tempWeatherFar = Math.round((props.currentWeather?.main.temp - 273.15) * 9 / 5 + 32);


    return (
        <ul className="list-left">
            <li className="list-left__item">
                <img className="list-left__img"
                     src={props.currentWeather?.weather[0]['icon']
                         ? `https://openweathermap.org/img/wn/${props.currentWeather.weather[0]['icon']}@2x.png`
                         : notImg}
                     alt=""/>
            </li>
            <li className="list-left__item">
                <ul className="sublist-left">
                    <li className="sublist-left__item">
                        {dayWeather ? `${dayWeather}` : 'Day'}
                    </li>
                    <li className="sublist-left__item">
                        {dateWeather ? `${dateWeather}` : 'Date'}
                    </li>
                    <li className="sublist-left__item">
                        {props.currentWeather?.weather[0]['description']}
                    </li>
                    <li className="sublist-left__item">
                        {(tempWeatherCel && tempWeatherFar)
                            ? `${tempWeatherCel} \u00B0C 
                                ${tempWeatherFar}\u00B0F`
                            : "0C/0F"
                        }
                    </li>
                    <li className="sublist-left__item">
                        {(props.currentWeather?.wind.speed && props.currentWeather?.wind.deg)
                            ? `${props.currentWeather?.wind.speed} m/s ${props.currentWeather?.wind.deg} deg`
                            : '0m/s 0deg'}
                    </li>

                </ul>
            </li>

        </ul>
    )
}


export default ListLeft;