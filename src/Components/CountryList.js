import React from "react";
import ListItem from "./ListItem";

const CountryList = ({countries}) => {
    const countryItems = countries.map((country, index) => {
        return <ListItem country={country} key={index}/>
    })

    return (
        <div>
            <h1>Countries</h1>
        <ul>
            {countryItems}
        </ul>
        </div>
    )
}

export default CountryList;