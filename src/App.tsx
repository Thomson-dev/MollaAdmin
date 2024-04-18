
import Sidebar from "./Components/Sidebar.tsx";
import Dashboard from "./Screens/Dashboard.tsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Screens/ProductList.tsx";


function App() {
  return (
    <div className="bg-slate-700 w-full h-screen flex">
      <div className="flex flex-row">
        <div className="w-[20%]">
        <Sidebar />
        </div>
        
       <div className="w-[80%]">
       <Router>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/product-list" element={<ProductList/>} />
        </Routes>
      </Router>
       </div>

      </div>
    </div>
  );
}

export default App;
