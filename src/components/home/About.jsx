import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

function About() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
        setShowFullContent(false); 
      } else {
        setIsMobileView(false);
        setShowFullContent(true); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  return (
    <section>
      <div className="container d-flex flex-column flex-md-row justify-content-center about py-md-5 py-3">
        <div
          className="about-left col-12 col-md-6 align-content-center rounded-4"
          data-aos="zoom-in"
        >
          <h2 className="pe-1 py-3  fw-bold">About Us</h2>
          <p className="about-left-para pe-2">
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
            future. {!showFullContent && <span>... </span>}
            {showFullContent && (
              <>
                <br /> <br />
                Tezla's tubular batteries, distinguished by their C10 and C20
                ratings, epitomize durability and efficiency, providing a
                seamless power supply over varying time intervals. Whether for
                residential, commercial, or industrial applications, Tezla's
                batteries are engineered to deliver consistent and enduring
                performance. <br /> <br />
                In addition to the provision of advanced tubular batteries,
                Tezla extends its expertise to the realm of inverters, UPS, and
                solar power units, establishing a holistic approach to energy
                management. Our innovative products and systems are crafted with
                precision, incorporating the latest technologies to ensure
                efficient performance and reliability. We offer a promise of
                uninterrupted power, energy efficiency, and a sustainable
                future.
              </>
            )}
          </p>

          {/* Only show the "View More" button in mobile view */}
          {isMobileView && (
            <a
              href="#"
              className="view-more mobile-only"
              onClick={toggleContent}
            >
              {showFullContent ? "View Less" : "View More"}
            </a>
          )}
        </div>

        <div
          className="about-right col-12 col-md-6 mt-4 mt-md-0"
          data-aos="zoom-in"
        >
          <img
            src="https://img.freepik.com/free-psd/abstract-background-design_1297-82.jpg?ga=GA1.2.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="img-fluid rounded-4"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
