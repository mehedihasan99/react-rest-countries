import React, { useEffect, useState } from 'react';
import MyCountry from '../MyCountry/MyCountry';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>All Country</h1>
          <div className='country-container'>
              {
              countries.map( country => <MyCountry 
                country = {country}
                key = {country.cca3}
                >
              </MyCountry>)
          }
          </div>
        </div>
    );
};

export default Countries;