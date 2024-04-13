import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Screens/Dashboard";


function App() {
  return (
    <div className="bg-slate-700 h-screen flex ">

      <div className="flex flex-row">
      <Sidebar/>
      <Dashboard/>
      </div>
  
    </div>
  );
}

export default App;
