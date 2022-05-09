import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg3.jpg" class="card-img" alt="Background" height="550px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-secondary">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2 text-muted">
                CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
      <Product/>
    </div>
  );
}

export default Home;
