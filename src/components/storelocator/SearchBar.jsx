import React, { useState } from "react";
import "./SearchBar.css";

const Locator = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const states = [
    "Select the State",
    "California",
    "New York",
    "Texas",
    "Florida",
  ]; // Add more as needed
  const cities = [
    "Select the City",
    "Los Angeles",
    "San Francisco",
    "Houston",
    "Miami",
  ]; // Add cities dynamically based on state

  return (
    <div className="locator-container mt-5 d-flex justify-content-center gap-5">
      <div>
        <p className="m-0 align-content-center fw-bold text-muted pt-2 align-items-center">Locate a nearest dealer in your city</p>
      </div>
      <div className="dropdowns">
        <select
          className="locator-select"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          className="locator-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Locator;
