import React from 'react';
import Weather from "./Weather";
import {connect} from "react-redux";


const WeatherContainer = (props) =>{
    return <Weather/>
}

let mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(WeatherContainer)