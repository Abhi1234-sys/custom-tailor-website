import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Creation from "./pages/Creation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
   
  useEffect(() => {
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : "light"}>

        {/* 🌙 Dark Mode Toggle (BOTTOM LEFT) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            padding: "12px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        {/* ✅ Auto Popup (NOW DARK MODE SUPPORT) */}
        {showPopup && (
          <div
            style={{
              position: "fixed",
              bottom: "100px",
              right: "20px",
              width: "260px",
              backgroundColor: darkMode ? "#1e1e1e" : "white",
              color: darkMode ? "#fff" : "#000",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              zIndex: 1000,
              animation: "slideUp 0.5s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "5px",
                right: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => setShowPopup(false)}
            >
              ✖
            </div>

            <p style={{ fontSize: "14px", marginBottom: "10px" }}>
              Hi 👋 Need stitching help?
            </p>

            <a
              href="https://wa.me/919851167574?text=Hello%20Umazzz%20Stitching!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#25D366",
                color: "white",
                textAlign: "center",
                padding: "8px",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        )}

        {/* ✅ Floating WhatsApp Button */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              marginBottom: "8px",
              backgroundColor: "#333",
              color: "#fff",
              padding: "6px 10px",
              borderRadius: "5px",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Chat with us
          </div>

          <a
            href="https://wa.me/919851167574?text=Hello%20Umazzz%20Stitching!%20I%20want%20to%20book."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              textDecoration: "none",
              boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
              animation: "pulse 1.5s infinite",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;