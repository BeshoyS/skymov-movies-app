import { Navigate, Route, Routes, useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../Home/Home.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Movies from "../Movies/Movies.jsx";
import Tv from "../Tv/Tv.jsx";
import Footer from "../Footer/Footer.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import People from "../People/People.jsx";
import MediaDetails from "../MediaDetails/MediaDetails.jsx";

function App() {
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();

  function getLoginUser() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setLoginUser(decodedToken);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getLoginUser();
    }
  }, []);

  function logout() {
    localStorage.removeItem("userToken");
    setLoginUser(null);
    navigate("/login");
  }

  return (
    <div className="App">
      <Navbar loginUser={loginUser} logout={logout} />
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home loginUser={loginUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <MediaDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tv"
          element={
            <ProtectedRoute>
              <Tv />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tv/:id"
          element={
            <ProtectedRoute>
              <MediaDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/people"
          element={
            <ProtectedRoute>
              <People />
            </ProtectedRoute>
          }
        />
        <Route
          path="/person/:id"
          element={
            <ProtectedRoute>
              <MediaDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login getLoginUser={getLoginUser} />} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
