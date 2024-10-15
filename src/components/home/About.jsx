import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <section>
      <div className=" p-3 p-md-5 d-flex flex-column flex-md-row justify-content-center about py-md-5 py-3">
        <div
          className="about-left col-12 col-md-4 rounded-4"
          data-aos="zoom-in"
        >
          <h3 className="px-4 py-3 fs-4 fw-bold">About Us</h3>
          <p className="px-4">
            Tezla Battery and Inverter is a pioneer in advanced solutions for
            energy storage and conversion. With a relentless commitment to
            innovation, our company designs and produces high-performance
            batteries and inverters tailored to meet diverse needs. We combine
            advanced technology with sustainable practices, ensuring our
            products deliver efficiency and durability while minimizing
            environmental impact. Our team of experts, fueled by passion and
            expertise, strives for excellence in every aspect, from research and
            development to customer service. Tezla stands as a symbol of
            reliability, powering homes, businesses, and industries worldwide
            with dependable energy solutions that empower a brighter, greener
            future. <br /> <br />
            Tezla's tubular batteries, distinguished by their C10 and C20
            ratings, epitomize durability and efficiency, providing a seamless
            power supply over varying time intervals. Whether for residential,
            commercial, or industrial applications, Tezla's batteries are
            engineered to deliver consistent and enduring performance. <br />{" "}
            <br />
          </p>

          <a href="#" className="view-more">
            View More
          </a>
        </div>

        <div
          className="about-right col-12 col-md-8 mt-4 mt-md-0 ms-md-3"
          data-aos="zoom-in"
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/003/421/390/small_2x/minimal-futuristic-abstract-gradient-red-stripes-background-design-free-vector.jpg"
            alt=""
            className="img-fluid rounded-4"
          />
          <p className=" text-white text-center">
            In addition to the provision of advanced tubular batteries, Tezla
            extends its expertise to the realm of inverters, UPS, and solar
            power units, establishing a holistic approach to energy management.
            Our innovative products and systems are crafted with precision,
            incorporating the latest technologies to ensure efficient
            performance and reliability. We offer a promise of uninterrupted
            power, energy efficiency, and a sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
