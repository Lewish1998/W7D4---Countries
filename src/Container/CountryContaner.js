import React, { useEffect, useState } from "react";
import CountryList from "../Components/CountryList";
import TitleBar from "../Components/TitleBar";

const CountryContainer = ({regions}) => {

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




    return (
        <div>
            <TitleBar regions={regions} handleSelectChange={handleSelectChange}/>
            <CountryList countries={countries}/>
        </div>
    )
}

export default CountryContainer;