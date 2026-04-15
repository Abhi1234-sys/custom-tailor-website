import React from "react";

const Pricing = () => {
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
      <h1 style={styles.heading}>💰 Our Pricing</h1>

      <p style={styles.note}>
        ⚠️ Prices may vary depending on design and market conditions.
      </p>

      <div style={styles.table}>
        {prices.map((item, index) => (
          <div key={index} style={styles.row}>
            <span>{item.service}</span>
            <span style={styles.price}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "600px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
  },
  note: {
    textAlign: "center",
    fontSize: "14px",
    color: "red",
    marginBottom: "20px",
  },
  table: {
    borderTop: "1px solid #ddd",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
  },
  price: {
    fontWeight: "bold",
    color: "#25D366",
  },
};

export default Pricing;