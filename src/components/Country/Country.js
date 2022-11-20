import React from 'react';
import './Country.css'
const Country = (props) => {

    const { name, population, area, region, flags } = props.country;
    return (
        <div className='country'>
            <h2>Country-Name: {name}</h2>
            <img src={flags.png} alt="flag" />
            <h5>Population: {population}</h5>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;