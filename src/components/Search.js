import { React, useState } from 'react';
import FullCountry from './Search-FullCountry';
import ShowInfo from './Search-ShowInfo';
import CountriesList from './Search-CountriesList';
import TooManyCatches from './Search.TooManyCatches';
import InvalidText from './Search.InvalidText';

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
    setId(event.target.getAttribute('data-id'));
    !showInfoStatus ? setShowInfoStatus(true) : setShowInfoStatus(false);
  };

  const CloseButtonHandle = () => {
    setFullCountryStatus(false);
    inputSearch.value = '';
  };

  return (
    <div>
      <div className='box-1'>
        <div className='box-1-1'>
          <div className='input-div'>
            <h5>Search:</h5>
            <input id='inputSearch' onChange={handleSearchChange} autocomplete='off' />
          </div>
        </div>
        <div className='box-1-2'>
          <TooManyCatches status={tooManyCatchesStatus} />
          <InvalidText status={invalidText} />
        </div>
      </div>
      <div>
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
          matchedCountries={matchedCountries}
          id={id}
          weather={weather}
          indexCountry={indexCountry}
          setCapital={setCapital}
        />
      </div>
    </div>
  );
};

export default Search;
