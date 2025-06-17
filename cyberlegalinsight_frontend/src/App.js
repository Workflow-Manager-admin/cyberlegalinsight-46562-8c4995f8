import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

// Basic stub components for each route (can be replaced with actual feature pages)
function Home() {
  return (
    <div className="hero">
      <div className="subtitle">Welcome to CyberLegalInsight</div>
      <h1 className="title">CyberLegalInsight</h1>
      <div className="description">
        Analyze cyber behavior and legal contract risks for students—an interactive, intelligent, and professional experience.
      </div>
      <NavLink to="/assessment" className="btn btn-large">
        Begin Assessment
      </NavLink>
    </div>
  );
}

function Assessment() {
  return (
    <div className="section-center">
      <h2 className="title">Cyber Assessment</h2>
      <div className="description">Interactive cyber behavior risk questionnaire (stub).</div>
      <NavLink to="/contract-upload" className="btn">
        Next: Contract Upload
      </NavLink>
    </div>
  );
}

function ContractUpload() {
  return (
    <div className="section-center">
      <h2 className="title">Upload Contract</h2>
      <div className="description">Upload your legal contract for AI analysis (stub).</div>
      <NavLink to="/results" className="btn">
        View Results
      </NavLink>
    </div>
  );
}

function Results() {
  return (
    <div className="section-center">
      <h2 className="title">Analysis Results</h2>
      <div className="description">
        Your assessment and contract risk score is shown here (stub).
      </div>
      <NavLink to="/thank-you" className="btn">
        Finish
      </NavLink>
    </div>
  );
}

function ThankYou() {
  return (
    <div className="section-center">
      <h2 className="title">Thank You!</h2>
      <div className="description">
        Thank you for using CyberLegalInsight. Your future is safer!
      </div>
      <NavLink to="/" className="btn">
        Return Home
      </NavLink>
    </div>
  );
}

// Navbar with theme toggle and navigation links
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <div className="container" style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div className="logo">
            <span className="logo-symbol">*</span> CyberLegalInsight
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <NavLink exact="true" to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Home
            </NavLink>
            <NavLink to="/assessment" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Assessment
            </NavLink>
            <NavLink to="/contract-upload" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Contract Upload
            </NavLink>
            <NavLink to="/results" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Results
            </NavLink>
            <NavLink to="/thank-you" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Thank You
            </NavLink>
            <button
              className="btn theme-toggle"
              style={{ minWidth: 40 }}
              title="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// PUBLIC_INTERFACE
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assessment" element={<Assessment />} />
                <Route path="/contract-upload" element={<ContractUpload />} />
                <Route path="/results" element={<Results />} />
                <Route path="/thank-you" element={<ThankYou />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;