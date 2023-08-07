import React from "react";
import "./dashBoard.css";

const DashBoard = () => {
  return (
    <div>
      <div className="home-bg" />

      <div className="board-container">
        <div className="card-container">
          <div className="head-board">
            <h1>Plantism Tips</h1>
          </div>

          <div className="card-user">
            <div className="card-1">
              <h2>user - 01</h2>
            </div>
            <img
              className="user-01"
              src="https://cdn.sanity.io/images/y346iw48/production/1d50eea7fd63e6f707e2a71b1f7bc44e02717e3c-336x336.png?w=200&auto=format"
              alt="plantism 1"
            />
            <div className="card-user01" />

            <div className="card-2">
              <h2>user - 02</h2>
            </div>
            <img
              className="user-02"
              src="https://cdn.sanity.io/images/y346iw48/production/1d50eea7fd63e6f707e2a71b1f7bc44e02717e3c-336x336.png?w=200&auto=format"
              alt="plantism 1"
            />
            <div className="card-user02" />

            <div className="card-3">
              <h2>user - 03</h2>
            </div>
            <img
              className="user-03"
              src="https://cdn.sanity.io/images/y346iw48/production/1d50eea7fd63e6f707e2a71b1f7bc44e02717e3c-336x336.png?w=200&auto=format"
              alt="plantism 1"
            />
            <div className="card-user03" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
