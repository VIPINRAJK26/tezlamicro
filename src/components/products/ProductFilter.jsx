import React, { useState } from "react";
import { Accordion, Card, Button, Collapse, Form } from "react-bootstrap";

const ProductFilter = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [openCategory, setOpenCategory] = useState(true);
  const [openSeries, setOpenSeries] = useState(true); 

  const handleCheckboxChange = (event, filterType) => {
    const { value, checked } = event.target;

    if (filterType === "category") {
      const updatedCategories = checked
        ? [...selectedCategories, value] 
        : selectedCategories.filter((category) => category !== value);

      setSelectedCategories(updatedCategories);
      onFilterChange({ category: updatedCategories, series: selectedSeries });
    } else if (filterType === "series") {
      const updatedSeries = checked
        ? [...selectedSeries, value] 
        : selectedSeries.filter((seriesItem) => seriesItem !== value); 

      setSelectedSeries(updatedSeries);
      onFilterChange({ category: selectedCategories, series: updatedSeries });
    }
  };

  return (
    <div className="filter-container">
      <h5 className="fw-bold text-center text-muted">Filters</h5>

      {/* Category Section */}
      <Card>
        <Card.Header>
          <Button
            onClick={() => setOpenCategory(!openCategory)}
            aria-controls="category-collapse"
            aria-expanded={openCategory}
            variant="link"
            className="text-decoration-none text-black fw-bold"
          >
            Category
          </Button>
        </Card.Header>
        <Collapse in={openCategory}>
          <div id="category-collapse">
            <Card.Body>
              {[
                "TUBULAR BATTERY",
                "HKVA INVERTER",
                "INVERTER",
                "SOLAR PCU",
                "MPPT S",
              ].map((category) => (
                <Form.Check
                  key={category}
                  type="checkbox"
                  label={category}
                  value={category}
                  checked={selectedCategories.includes(category)} 
                  onChange={(e) => handleCheckboxChange(e, "category")}
                />
              ))}
            </Card.Body>
          </div>
        </Collapse>
      </Card>

      {/* Series Section */}
      <Card>
        <Card.Header>
          <Button
            onClick={() => setOpenSeries(!openSeries)}
            aria-controls="series-collapse"
            aria-expanded={openSeries}
            variant="link"
            className="text-decoration-none text-black fw-bold"
          >
            Series
          </Button>
        </Card.Header>
        <Collapse in={openSeries}>
          <div id="series-collapse">
            <Card.Body>
              {[
                "C20 TALL TUBULAR BATTERIES",
                "C10 TALL TUBULAR BATTERIES",
                "C10 TALL TUBULAR BATTERIES PREMIUM",
                "SERIES 12V",
              ].map((series) => (
                <Form.Check
                  key={series}
                  type="checkbox"
                  label={series}
                  value={series}
                  checked={selectedSeries.includes(series)}
                  onChange={(e) => handleCheckboxChange(e, "series")}
                />
              ))}
            </Card.Body>
          </div>
        </Collapse>
      </Card>
    </div>
  );
};

export default ProductFilter;
