
import React from "react";

const ListItem = ({country, onCountryClicked}) => {

    const handleClick =function(event){
        console.log({country})
        onCountryClicked(event.target.value)
    }

    return(
    <>
    <li onClick={handleClick}><b>Country: {country.name.common}</b></li>
    <li>Population: {country.population}</li>
    </>

)}

export default ListItem;