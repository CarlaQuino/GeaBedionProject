import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./ccc/Head";
import Footer from "./ccc/Footer";
import LandingPage from "./ccc/Body";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Head />
        <main className="flex-grow">
          <Routes>
            <Route path="/*" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;