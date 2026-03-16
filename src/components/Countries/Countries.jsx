import React, { use, useState } from "react";
import Country from "../Counrty/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {

  const [visitedCountries, setVisitedCountries] =useState([])

  const handleVisitedCountries=(country)=>{
    console.log('visited Countries', country)
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h2>In the Countries: {countries.length}</h2>
      <h4>Total Country Visited: </h4>
      <div className="countries">
        {countries.map((country) => (
          <Country country={country} handleVisitedCountries={handleVisitedCountries}
          
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
