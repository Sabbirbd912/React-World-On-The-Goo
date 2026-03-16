import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country.region.region)

  const handleVisited = () => {
    // step 1
    // if(visited){
    //     setVisited(false)
    // }else{
    //     setVisited(true)
    // }

    // step 2
    // setVisited(visited ? false : true);

    // step 3
    setVisited(!visited);

    handleVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population:{country.population.population}</p>
      <p>Location: {country.region.region} </p>
      <p>
        Area:{country.area.area}
        {country.area.area > 300000 ? " Big Country" : " Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
