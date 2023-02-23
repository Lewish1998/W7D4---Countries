
import React from "react";

const ListItem = ({country}) => {

    return(
    <>
    <li><b>Country: {country.name.common}</b></li>
    <li>Population: {country.population}</li>
    <br></br>
    </>

)}

export default ListItem;