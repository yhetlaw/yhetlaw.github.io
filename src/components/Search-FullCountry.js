const FullCountry = ({ status, matchedCountries, weather }) => {
  if (!status) {
    return null;
  }
  return (
    <div>
      <h1>{matchedCountries[0].name}</h1>
      <p>
        The capital of {matchedCountries[0].name} is {matchedCountries[0].capital}
      </p>
      <p>
        The population of {matchedCountries[0].name} is {matchedCountries[0].population} people
      </p>
      <h2>Languages</h2>
      <ul>
        {matchedCountries[0].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        className='country-flag'
        src={matchedCountries[0].flag}
        alt={matchedCountries[0].name}></img>
      <h2>Weather in {matchedCountries[0].capital}</h2>
      <p>
        <b>temperature:</b> {weather.current.temperature} Celsius
      </p>
      <img
        src={weather.current.weather_icons}
        alt={weather.current.weather_descriptions}
        width='70'
        height='70'></img>
      <p>
        <b>wind:</b> {weather.current.wind_speed} mph, direction {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default FullCountry;
