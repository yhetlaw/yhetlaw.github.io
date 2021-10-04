import { Button } from 'react-bootstrap';

const ListItem = ({ handleShowInfo, text, id }) => {
  return (
    <li className='list-item'>
      {text}{' '}
      <Button variant='secondary' data-id={id} onClick={handleShowInfo}>
        Show info
      </Button>{' '}
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
