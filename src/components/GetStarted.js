import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';

const GetStarted = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    console.log('effect');
    axios.get('https://restcountries.com/v2/all').then((response) => {
      console.log('countries promise fulfilled');
      setCountries(response.data);
    });
  }, []);
  console.log('render', countries.length, 'countries');
  console.log('the countries are ', countries);

  const [weather, setWeather] = useState([]);
  const [capital, setCapital] = useState(null);
  console.log('The capital in App.js is', capital);

  useEffect(() => {
    console.log('effect');
    if (!capital) setCapital('Lisbon');
    const api_key = process.env.REACT_APP_API_KEY;
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then((response) => {
        console.log('weather promise fulfilled');
        setWeather(response.data);
      })
      .catch((error) => {
        console.log('weather promise failed');
      });
  }, [capital]);

  return (
    <div>
      <div className='getStarted-body'>
        <div className='getStarted-body__container'>
          <Search countries={countries} weather={weather} setCapital={setCapital} />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
