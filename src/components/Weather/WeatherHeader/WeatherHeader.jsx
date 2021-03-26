import React from "react";
import './WeatherHeader.scss';
import ListLeft from "./WeatherHeaderList/ListLeft/ListLeft";
import ListRigth from "./WeatherHeaderList/ListRigth/ListRight";


const WeatherHeader = (props) => {

    return (
        <div className="weather__header">
            <div className="weather__header-item">
                <h3 className="weather__header-title">losal weather report</h3>

                <ListLeft
                    currentWeather={props.currentWeather}
                />

            </div>

            <div className="weather__header-item">
                <h4 className="weather__header-title">sea forecast report</h4>
                <ListRigth/>
            </div>
        </div>
    )
}


export default WeatherHeader;