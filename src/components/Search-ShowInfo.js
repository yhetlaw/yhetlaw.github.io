const ShowInfo = ({ status, matchedCountries, weather, indexCountry, setCapital }) => {
  if (!status) {
    return null;
  }
  setCapital(matchedCountries[indexCountry].capital);
  return (
    <div>
      <h1>{matchedCountries[indexCountry].name}</h1>
      <p>
        The capital of {matchedCountries[indexCountry].name} is{' '}
        {matchedCountries[indexCountry].capital}
      </p>
      <p>
        The population of {matchedCountries[indexCountry].name} is{' '}
        {matchedCountries[indexCountry].population} people
      </p>
      <h2>Languages</h2>
      <ul>
        {matchedCountries[indexCountry].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={matchedCountries[indexCountry].flag}
        alt={matchedCountries[indexCountry].name}
        width='170'
        height='150'></img>
      <h2>Weather in {matchedCountries[indexCountry].capital}</h2>
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

export default ShowInfo;
