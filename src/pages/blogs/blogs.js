import React from "react";
import "./blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="blogs-container">
        <div className="top-blogs">
          <h1>Popular plants blogs 🪴</h1>

          <div className="pop-1">
            <button
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fwww.thehouseplantguru.com%2F%3Ffeed%3Drss2"
            >
              Read more &rarr;
            </button>
            <li className="pop-li">1. The Houseplants Guru</li>
            <h3 className="pop-desc">
              # We all need a little green in our lives.
            </h3>
          </div>

          <div className="pop-2">
            <button
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fohiotropics.com%2Ffeed%2F"
            >
              Read more &rarr;
            </button>
            <li className="pop-li">2. Houseplant Care Tips</li>
            <h3 className="pop-desc">#2 most popular plants blogs</h3>
          </div>

          <div className="pop-3">
            <button
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fwww.cactusjungle.com%2Fblog%2Ffeed%2F"
            >
              Read more &rarr;
            </button>
            <li className="pop-li">3. Cactus Blog - Cactus Jungle</li>
            <h3 className="pop-desc">#3 most popular plants blogs</h3>
          </div>

          <div className="pop-4">
            <button
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fcleverbloom.com%2Ffeed%2F"
            >
              Read more &rarr;
            </button>
            <li className="pop-li">4. Clever Bloom</li>
            <h3 className="pop-desc">#4 most popular plants blogs</h3>
          </div>

          <div className="pop-5">
            <button
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fbloomscape.com%2Ffeed%2F"
            >
              Read more &rarr;
            </button>
            <li className="pop-li">5. Bloomscape</li>
            <h3 className="pop-desc">#5 most popular plants blogs</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
