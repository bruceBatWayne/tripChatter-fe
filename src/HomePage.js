import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//import HomePage from "./HomePage"; // Example: Your existing component
//import LoginPage from "./LoginPage"; // Example: Your existing login component
import SignupPage from "./SignupPage.js"; // Import the new SignupPage

import "./App.css"; // CSS for styling


function HomePage() {
  const navigate = useNavigate(); // This creates a navigate function

  return (
    <div className="container">
        {/* Your existing routes */}
        
        
        {/* Add the SignupPage route */}
        <Routes>
        <Route path="/signup" element={<SignupPage />} />

        </Routes>
      <div className="content">
        <h1 className="title">tripChattr</h1>
        <div className="buttons">
          <button className="btn login-btn">logIn</button>
          <button className="btn signup-btn" onClick={() => navigate("/signup")}  >signUp</button>
        </div>
      </div>
      
    </div>
    
  );
}

export default HomePage;
