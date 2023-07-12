import React from "react";
import "./blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="blogs-container">
        <div className="top-planter">
          <h1>Popular plants blogs 🪴</h1>
          <div className="popular-container">
            <li>1. The Houseplants Guru</li>
            <h3>#1 most popular plants blogs</h3>
            <a href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fwww.thehouseplantguru.com%2F%3Ffeed%3Drss2">
              Read more &rarr;
            </a>
          </div>

          <div className="popular-container">
            <li>2. Houseplant Care Tips</li>
            <h3>#2 most popular plants blogs</h3>

            <a href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fohiotropics.com%2Ffeed%2F">
              Read more &rarr;
            </a>
          </div>

          <div className="popular-container">
            <li>3. Cactus Blog - Cactus Jungle</li>
            <h3>#3 most popular plants blogs</h3>

            <a href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fwww.cactusjungle.com%2Fblog%2Ffeed%2F">
              Read more &rarr;
            </a>
          </div>

          <div className="popular-container">
            <li>4. Clever Bloom</li>
            <h3>#4 most popular plants blogs</h3>

            <a href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fcleverbloom.com%2Ffeed%2F">
              Read more &rarr;
            </a>
          </div>

          <div className="popular-container">
            <li>5. Bloomscape</li>
            <h3>#5 most popular plants blogs</h3>

            <a href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fbloomscape.com%2Ffeed%2F">
              Read more &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
