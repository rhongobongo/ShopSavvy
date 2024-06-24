import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/home_bg.png'})`,
        }}
      >
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
          <div className="product-item">Product 1</div>
          <div className="product-item">Product 2</div>
          <div className="product-item">Product 3</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
