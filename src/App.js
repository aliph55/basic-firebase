import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import CreatePost from "./pages/CreatePost";
import ProtextRouter from "./pages/ProtextRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/createpost"
          element={
            <ProtextRouter>
              <CreatePost />
            </ProtextRouter>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
