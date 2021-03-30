import React from 'react';
import './Preloader.scss';
import preloader from '../../assets/images/preloader.gif';

const Preloader = ()=>{
    return <img className="preloader" src={preloader} alt="preloader"/>
}

export default Preloader;