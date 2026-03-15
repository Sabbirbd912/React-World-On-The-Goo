import React, { use } from "react";
import Country from "../Counrty/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h2>In the Countries: {countries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
