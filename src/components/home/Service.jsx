import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service container d-md-flex justify-content-center gap-4 rounded-5 my-5">
      <div className="service-left text-white col-md-6">
        <div className="service-head align-content-center p-5">
          <h2 className="pb-3 fw-bold">
            The Manufacturing Capability Of Tezla Batteries And Inverters/UPS{" "}
          </h2>
          <p >
            Tezla Batteries and Inverters boast advanced manufacturing
            capabilities, integrating precision engineering and advanced
            automation. Our facilities are equipped with the latest
            technologies, enabling streamlined production processes and
            meticulous quality control at every stage. With a focus on
            efficiency and scalability, we can meet diverse demands while
            maintaining exceptional standards of craftsmanship. From cell
            assembly to final product testing, our manufacturing processes
            adhere to rigorous standards, ensuring unparalleled reliability and
            performance in every Tezla battery and inverter. Backed by a
            commitment to excellence, we set the benchmark for innovation and
            quality in the energy storage industry
          </p>
        </div>
      </div>
      <div className="service-right col-md-6">
        <div className="service-right-img ">
          <img
            src="https://img.freepik.com/free-photo/automated-packaging-line-efficiency-production_91128-4695.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid-rr-similar"
            alt=""
            className="img-fluid image pb-4"
          />
          <img
            src="https://img.freepik.com/free-photo/industrial-metalworking-precision-skill_91128-4690.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid-rr-similar"
            alt=""
            className="img-fluid image2"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
