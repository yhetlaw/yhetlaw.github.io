const ShowInfo = ({ status, matchedCountries, weather, indexCountry, setCapital }) => {
  if (!status) {
    return null;
  }
  setCapital(matchedCountries[indexCountry].capital);
  return (
    <div>
      <h1>{matchedCountries[indexCountry].name}</h1>
      <h5>Languages:</h5>
      <ul>
        {matchedCountries[indexCountry].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <p>
        <b>Population:</b>
        {matchedCountries[indexCountry].population}
      </p>
      <p>
        <b>Capital:</b>
        {matchedCountries[indexCountry].capital}
      </p>
      <p>
        <b>Temperature in {matchedCountries[indexCountry].capital}:</b>{' '}
        {weather.current.temperature} Celsius,
      </p>
      <p>
        <b>wind:</b> {weather.current.wind_speed} mph, direction {weather.current.wind_dir}
      </p>
      <img
        src={weather.current.weather_icons}
        alt={weather.current.weather_descriptions}
        width='70'
        height='70'></img>

      <img
        className='flag-country'
        src={matchedCountries[indexCountry].flag}
        alt={matchedCountries[indexCountry].name}
        width='250'></img>
    </div>
  );
};

export default ShowInfo;
