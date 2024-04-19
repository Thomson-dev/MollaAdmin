import Sidebar from "./Components/Sidebar.tsx";
import Dashboard from "./Screens/Dashboard.tsx";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Screens/ProductList.tsx";

function App() {
  return (
    <div className="bg-slate-700 w-full h-screen flex">
      <Router>
      <div className="flex flex-row">
        <div className="md:w-[20%] hidden md:block  ">
          <Sidebar />
        </div>

        <div className="md:w-[80%] w-[100%]">
          
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product-list" element={<ProductList />} />
            </Routes>
         
        </div>
      </div>
      </Router>
     
    </div>
  );
}

export default App;
