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
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // পেজ লোড হওয়ার ৩ সেকেন্ড পর কোর্স পপ-আপ আসবে

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

        {/* ⭐ Top Announcement Bar */}
        <AnnouncementBar />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        {/* ⭐ Center Popup for 6 Months Sewing Course */}
        {showPopup && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: "380px",
              backgroundColor: darkMode ? "#1e1e1e" : "white",
              color: darkMode ? "#fff" : "#000",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              zIndex: 9999,
              textAlign: "center",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "15px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() => setShowPopup(false)}
            >
              ✖
            </div>

            <span
              style={{
                backgroundColor: "#e63946",
                color: "#fff",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              বিশেষ ঘোষণা
            </span>
            <h3 style={{ margin: "15px 0 10px 0", color: darkMode ? "#fff" : "#1d3557" }}>
              ৬ মাসের সেলাই কোর্স!
            </h3>
            <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "20px", lineHeight: "1.5" }}>
              এখন থেকে আমাদের এখানে অনলাইন ও অফলাইন উভয় মাধ্যমেই প্রফেশনাল সেলাই কোর্স করানো হচ্ছে। আজই যোগাযোগ করুন!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                backgroundColor: "#1d3557",
                color: "#fff",
                border: "none",
                padding: "10px 25px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              ঠিক আছে
            </button>
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