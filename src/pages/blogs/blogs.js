import React from "react";
import "./blogs.css";
import DashBoard from "./dashBoard";

const Blogs = () => {
  return (
    <div>
      <DashBoard />
      <div className="blogs-container">
        <div className="top-blogs">
          <h1>Popular plants blogs 🪴</h1>

          <div className="pop-1">
            <img
              className="img-fav"
              src="https://storage.googleapis.com/site-assets/UqPcXDd5t8oIq95X-_OBRB85I9g2jvj2aAe5J9Mv4T4_svisual-18487d5005f"
              alt="house plant guru"
            />
            <li className="pop-li">1. The Houseplants Guru</li>
            <h3 className="pop-desc">#1 most popular plants blogs</h3>
            <a
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fwww.thehouseplantguru.com%2F%3Ffeed%3Drss2"
            >
              Read Now &rarr;
            </a>
          </div>

          <div className="pop-2">
            <img
              className="img-fav"
              src="https://storage.googleapis.com/site-assets/WfETWC2SvNSRindU_jaggdAbIV3-LMOpsAOwNcXCOpg_svisual-1727d807a99"
              alt="house plant care tip"
            />
            <li className="pop-li">2. Houseplant Care Tips</li>
            <h3 className="pop-desc">#2 most popular plants blogs</h3>
            <a
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fohiotropics.com%2Ffeed%2F"
            >
              Read Now &rarr;
            </a>
          </div>

          <div className="pop-3">
            <img
              className="img-fav"
              src="https://storage.googleapis.com/site-assets/zev1wUs44yQZNXcQiar3wp5by2Vz0bzy8tVCoNSbpGA_visual-167085a7441"
              alt="cactus blog"
            />
            <li className="pop-li">3. Cactus Blog-Cactus Jungle</li>
            <h3 className="pop-desc">#3 most popular plants blogs</h3>
            <a
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fwww.cactusjungle.com%2Fblog%2Ffeed%2F"
            >
              Read Now &rarr;
            </a>
          </div>

          <div className="pop-4">
            <img
              className="img-fav"
              src="https://storage.googleapis.com/site-assets/tyuYEJfEUiscV7vxmUuROs8tuonu4eJAy2VoD0NCoXg_svisual-1825b6e7126"
              alt="clever bloom"
            />
            <li className="pop-li">4. Clever Bloom</li>
            <h3 className="pop-desc">#4 most popular plants blogs</h3>
            <a
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fcleverbloom.com%2Ffeed%2F"
            >
              Read Now &rarr;
            </a>
          </div>

          <div className="pop-5">
            <img
              className="img-fav"
              src="https://storage.googleapis.com/site-assets/ZDUsFPKgihKxx_rjQW9itb6X8NY-O-dcxeLmdz-czYw_visual-18511108863"
              alt="house plant care tip"
            />
            <li className="pop-li">5. Bloomscape</li>
            <h3 className="pop-desc">#5 most popular plants blogs</h3>
            <a
              className="pop-button"
              href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fbloomscape.com%2Ffeed%2F"
            >
              Read Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
