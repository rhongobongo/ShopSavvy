import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <img src={process.env.PUBLIC_URL + '/NxQLogo_tp2.png'} alt="NxQ Logo" className="hero-logo" />
          <h1>Welcome to ShopSavvy</h1>
          <p>Your one-stop shop for the latest products</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src={process.env.PUBLIC_URL + '/product1.jpg'} alt="Product 1" className="product-image" />
            <p>Razer Basilisk V3</p>
          </div>
          <div className="product-item">
            <img src={process.env.PUBLIC_URL + '/product2.jpg'} alt="Product 2" className="product-image" />
            <p>GeForce RTX 4090</p>
          </div>
          <div className="product-item">
            <img src={process.env.PUBLIC_URL + '/product3.jpg'} alt="Product 3" className="product-image" />
            <p>ROG Pugio</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
