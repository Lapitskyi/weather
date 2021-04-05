import React from 'react';
import './ListLeft.scss';
import notImg from '../../../../../assets/images/notImg.png'
import PropTypes from "prop-types";


const ListLeft = (props) => {

    const {weather: [{icon, description}], wind: {speed, deg}} = props.currentWeather;
    const {dayWeather, dateWeather, tempWeatherCel, tempWeatherFar} = props.tempWeather;


    return (

        <ul className="list-left">
            <li className="list-left__item">
                <img className="list-left__img"
                     src={icon
                         ? `https://openweathermap.org/img/wn/${icon}@2x.png`
                         : notImg}
                     alt="icon"/>
            </li>
            <li className="list-left__item">
                <ul className="sublist-left">
                    <li className="sublist-left__item">
                        {dayWeather ? dayWeather : 'Day'}
                    </li>
                    <li className="sublist-left__item">
                        {dateWeather ? dateWeather : 'Date'}
                    </li>
                    <li className="sublist-left__item">
                        {description ? description : 'desc'}
                    </li>
                    <li className="sublist-left__item">
                        {`${tempWeatherCel}\u00B0C | ${tempWeatherFar}\u00B0F`}

                    </li>
                    <li className="sublist-left__item">
                        {speed
                            ? `${speed} m/s ${deg} deg`
                            : '0m/s 0deg'}
                    </li>
                </ul>
            </li>
        </ul>
    )
}


export default ListLeft;
ListLeft.propTypes = {
    currentWeather: PropTypes.object,
    tempWeather:PropTypes.object,

    weather:PropTypes.array,
    wind:PropTypes.object,
    description:PropTypes.string,
    speed:PropTypes.number,
    deg:PropTypes.number,

    tempWeatherCel:PropTypes.number,
    tempWeatherFar:PropTypes.number,
    dayWeather:PropTypes.number,
    dateWeather:PropTypes.number,

}