import { React, useState } from 'react';
import FullCountry from './Search-FullCountry';
import ShowInfo from './Search-ShowInfo';
import CountriesList from './Search-CountriesList';
import TooManyCatches from './Search.TooManyCatches';
import InvalidText from './Search.InvalidText';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Search = ({ countries, weather, setCapital }) => {
  const inputSearch = document.getElementById('inputSearch');
  const [tooManyCatchesStatus, setTooManyCatchesStatus] = useState(false);
  const [invalidText, setInvalidText] = useState(false);
  const [countryListStatus, setCountryListStatus] = useState(false);
  const [fullCountryStatus, setFullCountryStatus] = useState(false);
  const [showInfoStatus, setShowInfoStatus] = useState(false);
  const [matchedCountries, setMatchedCountries] = useState([]);
  const [mapedCountries, setMapedCountries] = useState([]);
  const [id, setId] = useState('');

  const regex = /^[a-zA-Z]+$/;

  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().match(newSearch)
    );
    console.log(filteredCountries);
    setMatchedCountries(filteredCountries);

    const mapedCountries = filteredCountries.map((country) => country.name);
    console.log(`the maped countries are ${mapedCountries}`);
    setMapedCountries(mapedCountries);

    console.log(`length is ${inputSearch.value.length}`);
    if (!inputSearch || inputSearch.value.length === 0) {
      setInvalidText(false);
      setTooManyCatchesStatus(false);
      setFullCountryStatus(false);
      setCountryListStatus(false);
    } else if (!inputSearch.value.match(regex) || inputSearch.value.length === 0) {
      setTooManyCatchesStatus(false);
      setInvalidText(true);
      setFullCountryStatus(false);
      setCountryListStatus(false);
    } else if (filteredCountries.length === 1) {
      setTooManyCatchesStatus(false);
      setCapital(filteredCountries[0].capital);
      setFullCountryStatus(true);
      setCountryListStatus(false);
    } else if (
      filteredCountries.length > 0 &&
      filteredCountries.length <= 10 &&
      filteredCountries.length !== 1
    ) {
      setCountryListStatus(true);
      setInvalidText(false);
      setTooManyCatchesStatus(false);
      setFullCountryStatus(false);
      setShowInfoStatus(false);
    } else {
      setTooManyCatchesStatus(true);
      setFullCountryStatus(false);
      setCountryListStatus(false);
      setInvalidText(false);
    }
  };

  const indexCountry = mapedCountries.indexOf(id);

  const handleShowInfo = (event) => {
    setCountryListStatus(false);
    setId(event.target.getAttribute('data-id'));
    !showInfoStatus ? setShowInfoStatus(true) : setShowInfoStatus(false);
  };

  const CloseButtonHandle = () => {
    setFullCountryStatus(false);
    setShowInfoStatus(false);
    setCountryListStatus(false);
    inputSearch.value = '';
  };

  return (
    <div>
      <div className='triangle'></div>
      <div className='search-container'>
        <div className='search-container__box1'>
          <InputGroup className='search-container__input-group'>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              aria-label='Amount (to the nearest dollar)'
              placeholder='Search for a country'
              id='inputSearch'
              onChange={handleSearchChange}
              autoComplete='off'
            />
          </InputGroup>
        </div>
        <div className='search-container__box2'>
          <TooManyCatches status={tooManyCatchesStatus} />
          <InvalidText status={invalidText} />
        </div>
      </div>
      <CountriesList
        status={countryListStatus}
        matchedCountries={matchedCountries}
        handleShowInfo={handleShowInfo}
      />
      <FullCountry
        status={fullCountryStatus}
        CloseButtonHandle={CloseButtonHandle}
        matchedCountries={matchedCountries}
        weather={weather}
      />
      <ShowInfo
        status={showInfoStatus}
        CloseButtonHandle={CloseButtonHandle}
        matchedCountries={matchedCountries}
        id={id}
        weather={weather}
        indexCountry={indexCountry}
        setCapital={setCapital}
      />
    </div>
  );
};

export default Search;
