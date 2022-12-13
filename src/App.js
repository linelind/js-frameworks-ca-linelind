import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavContent from "./components/layout/Nav";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import Favourites from "./components/pages/Favourites";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavContent />

        <Container>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
