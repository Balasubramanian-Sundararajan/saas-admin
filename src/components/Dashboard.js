import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from local JSON file
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div style={styles.container}>
      <h1>Product Dashboard</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> — ${product.price} <br />
              {product.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "700px",
    margin: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px"
  }
};

export default Dashboard;