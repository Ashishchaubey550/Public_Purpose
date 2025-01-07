import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch("http://localhost:8000/product");
      result = await result.json();
      if (result && result.length > 0) {
        setProducts(result);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      let result = await fetch(`http://localhost:8000/product/${id}`, {
        method: "DELETE",
      });
      result = await result.json();
      if (result) {
        getProducts();
      }
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;

    if (key) {
      try {
        let result = await fetch(`http://localhost:8000/search/${key}`);
        result = await result.json();

        if (result) {
          setProducts(result);
        }
      } catch (error) {
        console.error("Error searching cars:", error);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-list-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search Car"
        onChange={searchHandle}
      />
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((item, index) => (
            <div key={item._id} className="product-card">
              <img
                src={`http://localhost:8000${item.image}`}
                alt={item.model}
                className="product-image"
              />
              <h3 className="product-model">Model: {item.model}</h3>
              <p className="product-company">Company: {item.company}</p>
              <p className="product-color">Color: {item.color}</p>
              <p className="product-distance">
                Distance Covered: {item.distanceCovered} km
              </p>
              <p className="product-modelYear">Model Year: {item.modelYear}</p>
              <p className="product-price">Price: ₹{item.price} Lakhs</p>
              <div className="product-actions">
                <button
                  className="delete-button bg-green-500 hover:bg-green-600"
                  onClick={() =>
                    window.open(
                      `https://wa.me/9705240491?text=${encodeURIComponent(
                       "Hello! I'm interested in purchasing a car and would like to learn more about your available options. Could you assist me with the details?"                      )}`,
                      "_blank"
                    )
                  }
                >
                <i className=" text-2xl ri-whatsapp-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No cars found</p>
      )}
    </div>
  );
}

export default ProductList;
