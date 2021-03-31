import React from 'react';
import './ListRigth.scss';
import PropTypes from "prop-types";


const ListRigth = (props) => {

    // let {
    //     coord: {lon, lat},
    //     weather: [{description }],
    //     main: {temp},
    //     visibility,
    //     wind: {speed, deg, gust },
    //     sys: {sunrise, sunset},
    //     name, id, cod, timezone
    // } = props.currentWeather;


    return (
        <ul className="weather-header__list">
            {props.currentWeather ?

                Object.keys(props.currentWeather).map(item =>

                    <li className="weather-header__list-item" key={item}>
                        <div className="weather__header-text">{`${[item]}`}
                            <span> {`${props.currentWeather[item]}`}</span></div>
                    </li>
                ) : <li className="weather-header__list-item">
                    <div className="weather__header-text"> WEATHER PARAMETERS</div>
                </li>

            }


        </ul>
    )
}

export default ListRigth;

ListRigth.propTypes={
    currentWeather:PropTypes.object

}