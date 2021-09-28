const ListItem = ({ handleShowInfo, text, id }) => {
  return (
    <li>
      {text}{' '}
      <button data-id={id} onClick={handleShowInfo}>
        Show info
      </button>
    </li>
  );
};

const CountriesList = ({ status, matchedCountries, handleShowInfo }) => {
  if (!status) {
    return null;
  }
  return (
    <div>
      <ul>
        {matchedCountries.map((country) => (
          <ListItem
            key={country.name}
            text={country.name}
            handleShowInfo={handleShowInfo}
            id={country.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
