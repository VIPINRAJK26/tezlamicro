// src/App.jsx (no need to change anything in the App.jsx since it's correctly set)
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
              {/* <Route path="/products/:category" element={<Products />} /> */}
              {/* <Route path="/single" element={<Single />} /> */}
              <Route path="/dealer" element={<Store />} />
              <Route path="/preview/:category" element={<Preview />} />{" "}
              {/* This route works for dynamic preview */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
