import "./App.css";
import SignIn from "./pages/Login/login.jsx";
import Register from "./pages/Register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="*" element={  <h2>not found this Route</h2>  } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
