import React from 'react';
import './ListLeft.scss';


const ListLeft = (props) => {
    const {weather, dt, main, wind} = props.currentWeather || {}
    return (

        <ul className="list-left">
            {(weather, dt, main, wind) ?
                <>
                    <li className="list-left__item">
                        <img className="list-left__img"
                             src={weather[0]['icon']
                                 ? `https://openweathermap.org/img/wn/${weather[0]['icon']}@2x.png`
                                 : "https://via.placeholder.com/100"}
                             alt=""/>
                    </li>
                    <li className="list-left__item">

                        <ul className="sublist-left">
                            <li className="sublist-left__item">
                                {dt
                                    ? `${new Date(dt * 1000).toLocaleString('en', {weekday: 'long'})}
                                 ${new Date(dt * 1000).toLocaleDateString()}`
                                    : ('DAY')
                                }
                            </li>
                            <li className="sublist-left__item">
                                {weather[0]['description']}

                            </li>
                            <li className="sublist-left__item">
                                {main.temp
                                    ? `${Math.round(main.temp - 273)} \u00B0C 
                                ${Math.round((main.temp - 273.15) * 9 / 5 + 32)}\u00B0F`
                                    : "0C/0F"
                                }
                            </li>
                            <li
                                className="sublist-left__item"> {(wind.speed && wind.deg)
                                ? `${wind.speed} m/s ${wind.deg} deg`
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
                        <ul className="sublist-left">
                            <li className="sublist-left__item">parametr</li>
                        </ul>
                    </li>

                </>
            }
        </ul>
    )
}


export default ListLeft;