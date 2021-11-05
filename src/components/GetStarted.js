import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';

const GetStarted = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const [weather, setWeather] = useState([]);
  const [capital, setCapital] = useState(null);

  useEffect(() => {
    if (!capital) setCapital('Lisbon');
    const api_key = process.env.REACT_APP_API_KEY;
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log('weather promise failed');
      });
  }, [capital]);

  return (
    <div>
      <div className='getStarted'>
        <div className='getStarted__container'>
          <Search countries={countries} weather={weather} setCapital={setCapital} />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
