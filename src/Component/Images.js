import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Carts.css'; // Import the CSS file
import { Button } from 'react-bootstrap';

function Images({ addToCart }) {
  // State to hold products
  const [products, setProducts] = useState(null);

  // Fetch data function
  const fetchData = async () => {
    try {
      let response = await axios.get("http://localhost:3004/cart");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="box1">
      {products &&
        products.map((item) => (
          <div  className="card">
            <div>
              <img src={`http://localhost:3004/${item.image}`} alt={item.name} />
              <Button
                style={{ marginTop: '10px', backgroundColor: "white" }}
                className="nav-Link btn btn-outline-dark me-2"
                onClick={() => addToCart(item)} >
                <i className="fa fa-shopping-cart me-1"></i> Add To Cart
              </Button>
            </div>
            <h1 style={{ fontSize: '1rem' }}>{item.productid}</h1>
            <h1 style={{ fontSize: '1.5rem' }}>{item.name}</h1>
            <h1 style={{ fontSize: '1rem' }}>{item.subtitle}</h1>
            <h1 style={{ fontSize: '1rem' }}>{item.Price}</h1>
          </div>
        ))}
    </div>
  );
}

export default Images;
