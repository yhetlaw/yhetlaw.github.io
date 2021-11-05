const ShowInfo = ({
  status,
  matchedCountries,
  weather,
  indexCountry,
  setCapital,
  CloseButtonHandle,
}) => {
  if (!status) {
    return null;
  }
  setCapital(matchedCountries[indexCountry].capital);
  return (
    <div className='show-country'>
      <button onClick={CloseButtonHandle} className='close-button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-x-lg '
          viewBox='0 0 16 16'>
          <path
            fillRule='evenodd'
            d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'
          />
          <path
            fillRule='evenodd'
            d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'
          />
        </svg>
      </button>
      <h1 style={{ textAlign: 'center', marginLeft: '30%' }}>
        {matchedCountries[indexCountry].name}
      </h1>
      <div className='show-country__result'>
        <div className='show-country__box1'>
          <p>
            <b>Languages:</b>
          </p>
          <ul>
            {matchedCountries[indexCountry].languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <p>
            <b>Population:</b> {matchedCountries[indexCountry].population}
          </p>
          <p>
            <b>Capital:</b> {matchedCountries[indexCountry].capital}
          </p>
        </div>
        <div className='show-country__box2'>
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
        </div>
        <div className='show-country__box3'>
          <img
            src={matchedCountries[indexCountry].flag}
            alt={matchedCountries[indexCountry].name}
            width='250'></img>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
