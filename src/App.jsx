import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Landing = lazy(() => import("./pages/HomePage"));
const Header = lazy(() => import("./components/header/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Products = lazy(() => import("./pages/ProductPage"));
const Single = lazy(() => import("./pages/SingleProduct"));
const Store = lazy(() => import("./pages/StoreLocator"));
const Preview = lazy(() => import("./pages/ProductPreview"));
const Contact = lazy(() => import("./pages/ContactUs"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense>
          <div className="position-sticky sticky-top z-5 w-100 header-shadow">
            <Header />
          </div>
        </Suspense>

        <main>
          <Suspense>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/products/:category/:series"
                element={<Products />}
              />
              <Route path="/single" element={<Single />} />
              <Route path="/dealer" element={<Store />} />
              <Route path="/preview/:category" element={<Preview />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense>
          <Footer />
        </Suspense>

        <a
          href="https://wa.me/917902777727"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Icon"
            className="whatsapp-icon"
          />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
