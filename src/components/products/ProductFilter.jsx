import React, { useState } from "react";
import { Accordion, Card, Button, Collapse, Form } from "react-bootstrap";

const ProductFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [openCategory, setOpenCategory] = useState(true);
  const [openSeries, setOpenSeries] = useState(true);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, series: selectedSeries });
  };

  const handleSeriesChange = (event) => {
    const series = event.target.value;
    setSelectedSeries(series);
    onFilterChange({ category: selectedCategory, series });
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
                  type="radio"
                  label={category}
                  value={category}
                  checked={selectedCategory === category}
                  onChange={handleCategoryChange}
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
                  type="radio"
                  label={series}
                  value={series}
                  checked={selectedSeries === series}
                  onChange={handleSeriesChange}
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
