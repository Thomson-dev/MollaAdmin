import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ProductList from "./Screens/ProductList.js";
import NewProduct from "./Screens/NewProduct.js";
import ProductEdit from "./Screens/ProductEdit.js";
import Settings from "./Screens/Settings.js";
import Login from "./Screens/Login.jsx";
import PrivateRoute from "./Components/privateRoutes.jsx";
import Sidebar from "./Components/Sidebar.js";
import Dashboard from "./Screens/Dashboard.jsx";
import OrderScreen from "./Screens/OrderScreen.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <AppContent />
      <ToastContainer />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className=" bg-[#FAFAFA] w-full">
      <div className="flex flex-row">
        {!isLoginPage && <Sidebar />}
        <div
          className={`flex-1 max-w-[1450px]  border border-red-500 h-screen mx-auto ${
            !isLoginPage ? "ml-0 lg:ml-64" : ""
          } p-6`}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={Dashboard} />}
            />
            <Route
              path="/product-list"
              element={<PrivateRoute element={ProductList} />}
            />

            <Route
              path="/new-product"
              element={<PrivateRoute element={NewProduct} />}
            />
            <Route
              path="/product-edit/:id"
              element={<PrivateRoute element={ProductEdit} />}
            />
            <Route
              path="/order"
              element={<PrivateRoute element={OrderScreen} />}
            />
            <Route
              path="/settings"
              element={<PrivateRoute element={Settings} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
