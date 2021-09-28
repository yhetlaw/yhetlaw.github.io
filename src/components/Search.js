import { React, useState } from 'react';
import FullCountry from './Search-FullCountry';
import ShowInfo from './Search-ShowInfo';
import CountriesList from './Search-CountriesList';
import TooManyCatches from './Search.TooManyCatches';

const Search = ({ countries, weather, setCapital }) => {
  const inputSearch = document.getElementById('inputSearch');
  const [tooManyCatchesStatus, setTooManyCatchesStatus] = useState(false);
  const [countryListStatus, setCountryListStatus] = useState(false);
  const [fullCountryStatus, setFullCountryStatus] = useState(false);
  const [showInfoStatus, setShowInfoStatus] = useState(false);
  const [matchedCountries, setMatchedCountries] = useState([]);
  const [mapedCountries, setMapedCountries] = useState([]);
  const [id, setId] = useState('');

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

    if (!inputSearch) {
      setTooManyCatchesStatus(true);
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
      setTooManyCatchesStatus(false);
      setFullCountryStatus(false);
      setShowInfoStatus(false);
    } else {
      setTooManyCatchesStatus(true);
      setFullCountryStatus(false);
      setCountryListStatus(false);
    }
  };

  const indexCountry = mapedCountries.indexOf(id);

  const handleShowInfo = (event) => {
    setId(event.target.getAttribute('data-id'));
    !showInfoStatus ? setShowInfoStatus(true) : setShowInfoStatus(false);
  };

  return (
    <div className='search-div'>
      <div className='input-div'>
        Search for countries:
        <input id='inputSearch' onChange={handleSearchChange} />
      </div>
      <TooManyCatches status={tooManyCatchesStatus} />
      <CountriesList
        status={countryListStatus}
        matchedCountries={matchedCountries}
        handleShowInfo={handleShowInfo}
      />
      <FullCountry
        status={fullCountryStatus}
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
  );
};

export default Search;
