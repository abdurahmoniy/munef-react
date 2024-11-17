import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import HomeRus from "./components/rus/Home";
import "./components/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import ContactRus from "./components/rus/Contact";
import AllProductsRus from "./components/rus/AllProducts";
import ProductDetailRus from "./components/rus/ProductDetail";
import Order from "./components/Order";
import OrderRus from "./components/rus/Order";

function App() {
  const [pcardData, setPcardData] = useState([]);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    fetch("https://api.munef.uz/api/products")
      .then((response) => response.json())
      .then((data) => {
        setPcardData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setShowPreloader(false); // Set showPreloader to false regardless of success or error
      });
  }, []);

  return (
    <div>
      <Router>
        {showPreloader ? (
          <div id="preloader">
            <div id="preloader"></div>
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<Home data={pcardData} />} />
              <Route path="/rus" element={<HomeRus data={pcardData} />} />
              <Route
                path="/allproducts"
                element={<AllProducts data={pcardData} />}
              />
              <Route
                path="/rus/allproducts"
                element={<AllProductsRus data={pcardData} />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rus/contact" element={<ContactRus />} />
              <Route
                path="/product_detail/:id"
                element={<ProductDetail pdata={pcardData} />}
              />
              <Route
                path="/rus/product_detail/:id"
                element={<ProductDetailRus pdata={pcardData} />}
              />
              <Route
                path="/order/:id"
                element={<Order pdata={pcardData} />}
              />
              <Route
                path="/rus/order/:id"
                element={<OrderRus pdata={pcardData} />}
              />
            </Routes>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
