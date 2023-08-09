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
              <a href="https://www.thesill.com/blog/top-ten-plant-care-tips">
                Top 10 Plant Care Tips
              </a>
              <h3>
                Plenty of ways to care for your plant. With the help of our
                plant experts.
              </h3>
            </div>
            <img
              className="user-01"
              src="https://cdn.sanity.io/images/y346iw48/production/1d50eea7fd63e6f707e2a71b1f7bc44e02717e3c-336x336.png?w=200&auto=format"
              alt="plantism 1"
            />
            <div className="card-user01" />

            <div className="card-2">
              <a href="https://pottedpixie.com/indoor-plant-care-for-beginners/">
                Indoor Plant Care for Beginners: 15 Fail-Proof Tips for Success
              </a>
              <h3>This guide to indoor plant care for beginners.</h3>
            </div>
            <img
              className="user-02"
              src="https://pottedpixie.com/wp-content/uploads/2021/02/monstera-with-lots-of-growth-2048x1789.jpg"
              alt="plantism 2"
            />
            <div className="card-user02" />

            <div className="card-3">
              <a href="https://www.gardenia.net/guide/best-annual-flowers-plants-to-spruce-up-your-garden">
                Best Annual Flowers and Plants to Spruce up Your Garden
              </a>
              <h3>
                The perfect way to add a burst of color and life to your garden.
              </h3>
            </div>
            <img
              className="user-03"
              src="https://www.gardenia.net/storage/app/public/guides/detail//tf4BNzj4nRdjqO6vo1viVzmIVuXqv94qPOMbQhhs.webp"
              alt="plantism 3"
            />
            <div className="card-user03" />

            <div className="card-4">
              <a href="https://www.gardenia.net/guide/best-annual-flowers-plants-to-spruce-up-your-garden">
                Birth Month Flowers: What is my Birth Flower?
              </a>
              <h3>
                Embrace your birth month with the enchanting beauty of your
                unique birth flower.
              </h3>
            </div>
            <img
              className="user-04"
              src="https://www.gardenia.net/storage/app/public/guides/detail//SxibEbNM3Hwfawaq0yA2M4hfV3Hx9BcBXrjDSZLp.webp"
              alt="plantism 4"
            />
            <div className="card-user04" />

            <div className="card-5">
              <a href="https://www.gardenia.net/guide/plants-that-repel-mosquitoes">
                18 Best Plants That Repel Mosquitoes
              </a>
              <h3>
                Place these mosquito-repellent plants in containers on patios,
                porches, or seating areas where you want a mosquito-free zone
              </h3>
            </div>
            <img
              className="user-05"
              src="https://www.gardenia.net/storage/app/public/plant_family/detail/k4Xk7BEQtebjAioBwC8mzuEQRvrx53CN9Qv0C4z6.webp"
              alt="plantism 5"
            />
            <div className="card-user05" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
