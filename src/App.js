import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
<Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page */}
        <Route path="/signup" element={<SignupPage />} /> {/* Sign-up page */}
      </Routes>
      </Router>
  );
}

export default App;
