import React from 'react';
import notFound from '../../assets/images/NotFound.png';
import './NotFound.scss';

const NotFound = () => {
    return (
        <>
            <img className='notFound' src={notFound} alt="notFound"/>
        </>
    )
}


export default NotFound;