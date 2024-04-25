import Sidebar from "./Components/Sidebar.tsx";
import Dashboard from "./Screens/Dashboard.tsx";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Screens/ProductList.tsx";
import NewProduct from "./Screens/NewProduct.tsx";

function App() {
  return (
    <div className="bg-[#1F2937]  w-full  ">
      <Router>
        <div className="flex bg-[#111827] flex-row">
          <div className=" hidden w-[20%]  md:block   ">
            <Sidebar />
          </div>

          <div className="flex-1 bg-[#1F2937]  w-[80%]" >
            <Routes >
              <Route path="/" element={<Dashboard />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/new-product" element={<NewProduct/>} />
            </Routes>
          

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
