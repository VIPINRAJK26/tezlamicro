import React from "react";
import "./Service.css"; 

const Service = () => {
  return (
    <div className="service m-md-5 m-2 rounded-5 my-5">
      <div className="row">
        {/* Left Section (Paperless Warranty) */}
        <div className="col-lg-4 col-md-12 p-sm-0 py-0 ">
          <div className="service-left p-4  text-white h-100">
            <h4 className="mb-3 fw-bold">
              The Manufacturing Capability Of Tezla Batteries And Inverters/UPS{" "}
            </h4>
            <p>
              Tezla Batteries and Inverters boast advanced manufacturing
              capabilities, integrating precision engineering and advanced
              automation. Our facilities are equipped with the latest
              technologies, enabling streamlined production processes and
              meticulous quality control at every stage. With a focus on
              efficiency and scalability, we can meet diverse demands while
              maintaining exceptional standards of craftsmanship. From cell
              assembly to final product testing, our manufacturing processes
              adhere to rigorous standards, ensuring unparalleled reliability
              and performance in every Tezla battery and inverter. Backed by a
              commitment to excellence, we set the benchmark for innovation and
              quality in the energy storage industry
            </p>
          </div>
        </div>

        <div className="service-middle col-lg-4 col-md-6 mb-0 d-flex  flex-column justify-content-between">
          <div className="bg-light text-center  mb-4 h-50 d-flex flex-column justify-content-center">
            <div className="image mt-md-0 mt-4">
              <img
                src="https://new.abb.com/images/librariesprovider98/industry-images/social_battery-industry_1200x627.jpg?sfvrsn=3ac94e0c_1"
                alt="Customer Support"
                className="img-fluid "
              />
              {/* <h5>Delighting customers is our philosophy</h5> */}
            </div>
          </div>
          <div className="image2 bg-light h-50 d-flex flex-column justify-content-center">
            <img
              src="https://img.freepik.com/premium-photo/professional-call-center-woman-assisting-customers-with-crm_901408-9429.jpg"
              alt="Customer Support Agent"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Right Section (Customer Support Options) */}
        <div className="col-lg-4 col-md-6 mb-4 p-0">
          <div className="service-right bg-white p-4 h-100 d-flex flex-column">
            <h4 className="fw-bold">Unmatched Customer Support</h4>
            <p className="text-muted">
              Warrior prioritizes customer satisfaction to ensure the best pre
              and post sales experience. 24 Hr customer support is available.
            </p>

            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-success rounded-5 border me-2">
                <i className="fas fa-comments"></i> Chat With Us
              </button>
              <button className="btn btn-info border rounded-5 me-2">
                <i className="fas fa-phone"></i> Call Us
              </button>
              <button className="btn btn-warning rounded-5 border">
                <i className="fas fa-file-alt"></i> Complaints
              </button>
            </div>
            <div className="mt-auto text-end">
              <a href="/services" className="text-primary text-decoration-none">
                View Services &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
