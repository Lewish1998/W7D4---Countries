import React from "react";

const TitleBar = ({handleSelectChange, regions}) => {
    return (
        <div>
            <h1>TitleBar</h1>
            <select onChange={handleSelectChange}>
                {regions.map(region => {
                    return <option key={region.name} value={region.url}>{region.name}</option>
                })}
            </select>
        </div>
    )
}

export default TitleBar;