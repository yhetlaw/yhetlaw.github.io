const ItemCard = ({ handleShowInfo, text, id, flag }) => {
  return (
    <div
      className='countries-list__item'
      data-id={id}
      onClick={handleShowInfo}
      style={{ backgroundImage: `url(${flag})` }}>
      <div>{text}</div>
    </div>
  );
};

const CountriesList = ({ status, matchedCountries, handleShowInfo }) => {
  if (!status) {
    return null;
  }

  return (
    <div className='countries-list'>
      <div className='countries-list__cards'>
        {matchedCountries.map((country) => (
          <ItemCard
            text={country.name}
            key={country.name}
            handleShowInfo={handleShowInfo}
            id={country.name}
            flag={country.flag}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
