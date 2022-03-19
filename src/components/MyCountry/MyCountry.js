import React from 'react';
import './Mycountry.css'
const MyCountry = (props) => {
    console.log(props.country);
    const {name, flags, population, area} = props.country;
    return (
        <div className='country'>
            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
        </div>
    );
};

export default MyCountry;