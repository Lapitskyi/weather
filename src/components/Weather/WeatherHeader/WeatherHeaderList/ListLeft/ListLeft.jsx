import React from 'react';
import './ListLeft.scss';


const ListLeft = (props) => {

    return (

        <ul className="list-left">
            {props.currentWeather ?
                <>
                    <li className="list-left__item">
                        <img className="list-left__img"
                             src={props.currentWeather.weather[0]['icon']
                                 ? `https://openweathermap.org/img/wn/${props.currentWeather.weather[0]['icon']}@2x.png`
                                 : "https://via.placeholder.com/100"}
                             alt=""/>
                    </li>
                    <li className="list-left__item">

                        <ul className="sublist-left__item">
                            <li className="sublist-left__date">
                                {props.currentWeather.dt
                                    ? `${new Date(props.currentWeather.dt * 1000).toLocaleString('en', {weekday: 'long'})}
                                 ${new Date(props.currentWeather.dt * 1000).toLocaleDateString()}`
                                    : ('DAY')
                                }
                            </li>
                            <li className="sublist-left__date">
                                {props.currentWeather.weather[0]['description']}

                            </li>
                            <li className="sublist-left__temperature">
                                {props.currentWeather.main.temp
                                    ? `${Math.round(props.currentWeather.main.temp - 273)} \u00B0C 
                                ${Math.round((props.currentWeather.main.temp - 273.15) * 9 / 5 + 32)}\u00B0F`
                                    : "0C/0F"
                                }</li>
                            <li
                                className="sublist-left__wind"> {(props.currentWeather.wind.speed && props.currentWeather.wind.deg)
                                ? `${props.currentWeather.wind.speed} m/s ${props.currentWeather.wind.deg} deg`
                                : '0m/s 0deg'}
                            </li>

                        </ul>
                    </li>


                </> :
                <>
                    <li className="list-left__item">
                        <img className="list-left__img" src="https://via.placeholder.com/100" alt=""/>
                    </li>
                    <li className="list-left__item">
                        <div className="list-left__date">DAY/ DESCRIPTION</div>
                    </li>
                    <li className="list-left__item">
                        <div className="list-left__wind"> Wind 0m/s 0deg</div>
                    </li>
                    <li className="list-left__item">
                        <div className="list-left__temperature"> TEMP 0C/0F</div>
                    </li>
                </>
            }
        </ul>
    )
}


export default ListLeft;