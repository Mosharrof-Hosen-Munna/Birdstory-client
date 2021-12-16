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
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
function App() {
  useFirebase();
  // useEffect(() => {
  //   getCurrentUser();
  // }, []);
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
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
