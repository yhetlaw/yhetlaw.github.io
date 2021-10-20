const FullCountry = ({ status, matchedCountries, weather }) => {
  if (!status) {
    return null;
  }
  return (
    <div className='main-full-country'>
      <h1 style={{ textAlign: 'center' }}>{matchedCountries[0].name}</h1>
      <div className='result-container'>
        <div className='result-box-1'>
          <h5>Languages:</h5>
          <ul>
            {matchedCountries[0].languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <p>
            <b>Population:</b> {matchedCountries[0].population}
          </p>
        </div>
        <div className='result-box-2'>
          <p>
            <b>Capital:</b> {matchedCountries[0].capital}
          </p>
          <p>
            <b>Temperature in {matchedCountries[0].capital}:</b> {weather.current.temperature}{' '}
            Celsius,
          </p>
          <p>
            <b>wind:</b> {weather.current.wind_speed} mph, direction {weather.current.wind_dir}
          </p>
          <img
            src={weather.current.weather_icons}
            alt={weather.current.weather_descriptions}
            width='70'
            height='70'></img>
        </div>
        <div className='result-box-3'>
          <img
            className='flag-country'
            src={matchedCountries[0].flag}
            alt={matchedCountries[0].name}
            width='250'></img>
        </div>
      </div>
    </div>
  );
};

export default FullCountry;
