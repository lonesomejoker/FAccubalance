import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import Stocks from "./pages/Stocks";
import Purchase from "./pages/Purchase";
import Sidebar from "./components/Sidebar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/stocks" element={<Stocks />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
