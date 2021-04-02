import React from 'react';
import './ListLeft.scss';
import notImg from '../../../../../assets/images/notImg.png'

const ListLeft = (props) => {

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
                        {props.tempWeather.dayWeather ? props.tempWeather.dayWeather : 'Day'}
                    </li>
                    <li className="sublist-left__item">
                        {props.tempWeather.dateWeather ? props.tempWeather.dateWeather : 'Date'}
                    </li>
                    <li className="sublist-left__item">
                        {props.currentWeather?.weather[0]['description']}
                    </li>
                    <li className="sublist-left__item">
                        {`${props.tempWeather.tempWeatherCel}\u00B0C | ${props.tempWeather.tempWeatherFar}\u00B0F`}

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