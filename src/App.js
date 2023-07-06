import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./components/HomePage.jsx";
import ContactPage from "./components/ContactPage.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;
