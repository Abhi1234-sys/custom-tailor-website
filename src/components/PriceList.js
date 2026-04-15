import React from "react";

const PriceList = () => {
  const prices = [
    { service: "Saree Falls & Pico", price: "₹100" },
    { service: "Blouse (Normal)", price: "₹300" },
    { service: "Blouse (Gol/Chouka/Latkan)", price: "₹320" },
    { service: "Designer Blouse (Latkan)", price: "₹350 - ₹370" },
    { service: "Churidar (Without Lining)", price: "₹150" },
    { service: "Churidar (With Lining)", price: "₹250" },
    { service: "Churidar Pant", price: "₹120 - ₹150" },
    { service: "Sleeve Add (Hata Lagano)", price: "₹30" },
    { service: "Churidar/Kurti Fitting", price: "₹25" },
    { service: "Blouse Fitting", price: "₹20" },
    { service: "Lehenga Set", price: "₹500" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>💰 Price List</h2>

      <div style={styles.grid}>
        {prices.map((item, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.service}>{item.service}</p>
            <p style={styles.price}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
    background: "#fff",
  },
  heading: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  card: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  service: {
    fontSize: "14px",
    marginBottom: "5px",
  },
  price: {
    fontWeight: "bold",
    color: "#25D366",
  },
};

export default PriceList;