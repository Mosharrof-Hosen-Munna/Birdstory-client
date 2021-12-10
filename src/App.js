import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Shared/Login/Login";
import Register from "./Pages/Shared/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
