import React from 'react';
import './ListLeft.scss';


const ListLeft = (props) => {
    return (

        <ul className="list-left">
            <li className="list-left__item">
                <img className="list-left__img" src="https://via.placeholder.com/100" alt=""/>
            </li>
            <li className="list-left__item">
                <div className="list-left__date">SUNDAY/ SUNNY</div>
            </li>
            <li className="list-left__item">
                <div className="list-left__param">14 km/h sw</div>
            </li>
            <li className="list-left__item">
                <div className="list-left__temperature">22C/71.6F</div>
            </li>
        </ul>

    )
}


export default ListLeft;