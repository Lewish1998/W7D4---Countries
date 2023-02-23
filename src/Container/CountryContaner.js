import React, { useEffect, useState } from "react";
import CountryList from "../Components/CountryList";

const CountryContainer = ({regions}) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, [])


    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(result => result.json())
        .then(countries => setCountries(countries))
    }






    return (
        <div>
            <CountryList countries={countries}/>
            {regions}
        </div>
    )
}

export default CountryContainer;