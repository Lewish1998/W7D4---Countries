
import React from "react";

const ListItem = ({country}) => {

    return(
    <>
    <li>Country: {country.name.common}</li>
    <li>Population: {country.population}</li>
    <br></br>
    </>

)}

export default ListItem;