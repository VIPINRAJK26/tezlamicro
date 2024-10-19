import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const Locator = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStates = async () => {
    try {
      const response = await fetch(`https://server.tezla.in/dealer/`);
      if (!response.ok) {
        throw new Error("Failed to fetch states");
      }
      const data = await response.json();
      const uniqueStates = [...new Set(data.map((dealer) => dealer.state))];
      setStates(uniqueStates);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchCities = async (state) => {
    if (!state) {
      setCities([]);
      return;
    }
    try {
      const response = await fetch(
        `https://server.tezla.in/dealer/?state=${state}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cities");
      }
      const data = await response.json();
      const uniqueCities = [...new Set(data.map((dealer) => dealer.city))];
      setCities(uniqueCities);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchDealers = async () => {
    if (!selectedState || !selectedCity) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://server.tezla.in/dealer/?state=${selectedState}&city=${selectedCity}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch dealers");
      }
      const data = await response.json();
      setDealers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchCities(selectedState);
  }, [selectedState]);

  useEffect(() => {
    fetchDealers();
  }, [selectedState, selectedCity]);

  return (
    <div className="locator-container mt-0 d-flex flex-column align-items-center gap-5">
      <h2 className="fw-bold text-muted">Locate a Nearest Dealer</h2>
      <div className="dropdowns">
        <select
          className="locator-select"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select the State</option>
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
          <option value="">Select the City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* <button className="btn btn-primary" onClick={fetchDealers}>
        Search Dealers
      </button> */}

      {loading && <p>Loading dealers...</p>}
      {error && <p className="text-danger">{error}</p>}
      {dealers.length > 0 && (
        <div className="dealer-list mt-4">
          <h5 className="pb-2">
            Dealers in {selectedCity}, {selectedState}:
          </h5>
          <div className="row">
            {dealers.map((dealer) => (
              <div className="col-md-12" key={dealer.id}>
                <div className="card mb-4 custom-card">
                  <div className="card-body">
                    <h5 className="card-title">{dealer.name}</h5>
                    <p className="card-text">Phone: {dealer.number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* {dealers.length === 0 && !loading && !error && <p>No dealers found.</p>} */}
    </div>
  );
};

export default Locator;
