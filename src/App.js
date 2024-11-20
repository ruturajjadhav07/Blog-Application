import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar.jsx";
import Login from "./Pages/Login.js";
import Signup from "./Pages/SignUp.js";
import Home from "./Components/Home.js";



function App() {
  return (
    <Router>
      <CustomNavbar />
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;
