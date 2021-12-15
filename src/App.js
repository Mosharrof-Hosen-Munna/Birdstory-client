import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Shared/Login/Login";
import Register from "./Pages/Shared/Register/Register";
import { useEffect } from "react";
import useFirebase from "./Hooks/useFirebase";
import Home from "./Pages/Home/Home";
import PrivateRoute, {
  AuthenticationPrivateRoute,
} from "./Pages/PrivateRoute/PrivateRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/account/login"
          element={
            <AuthenticationPrivateRoute>
              <Login />
            </AuthenticationPrivateRoute>
          }
        />
        <Route
          path="/account/register"
          element={
            <AuthenticationPrivateRoute>
              <Register />
            </AuthenticationPrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
