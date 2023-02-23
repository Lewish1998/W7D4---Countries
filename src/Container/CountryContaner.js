import React, { useEffect, useState } from "react";
import CountryList from "../Components/CountryList";
import TitleBar from "../Components/TitleBar";
import CountrySelector from "../Components/CountrySelector";

const CountryContainer = ({regions}) => {

    const [selectedCountry, setSelectedCountry] = useState([])
    const[countries, setCountries] = useState([])

    useEffect(() => {
      getRegions(regions[0].url)
    }, [regions])


    const getRegions = url => {
        fetch(url)
        .then(results => results.json())
        .then(countries => setCountries(countries))
    }

    const handleSelectChange = event => {
        getRegions(event.target.value)
    }


    const onCountryClicked = function(country) {
        setSelectedCountry(countries[country])
    }


    return (
        <div>
            <TitleBar regions={regions} handleSelectChange={handleSelectChange}/>
            <CountryList countries={countries} selectedCountry={selectedCountry} onCountryClicked={onCountryClicked}/>
            <CountrySelector selectedCountry={selectedCountry}/>
        </div>
    )
}

export default CountryContainer;