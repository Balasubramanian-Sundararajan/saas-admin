import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ onAdd }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.description) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description
    };

    onAdd(newProduct);
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: "20px", maxWidth: "500px", margin: "auto" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  textarea: { padding: "10px", fontSize: "16px", height: "80px" },
  button: { padding: "10px", fontSize: "16px", cursor: "pointer" }
};

export default AddProduct;