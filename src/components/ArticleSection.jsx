import Residential from "../assets/top-residential.webp";
import ImageList from "../assets/image-list.webp";
import GuideImg from "../assets/guide-img.webp";

const ArticleSection = () => {
  return (
    <section className="sold section-pad">
      <div className="section-heading section-heading--center">
        <p className="eyebrow">What we do</p>
        <h2>Get It Sold</h2>
      </div>

      <div className="story-grid">
        <article className="story-card story-card--wide">
          <div className="story-image">
            <img
              src={Residential}
              alt="Modern open plan kitchen and living room"
            />
          </div>
          <div className="story-copy">
            <span>01</span>
            <h3>Top Residential Sales Last 5 Years</h3>
            <p>
              We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales! Our team works hard everyday to grow and learn, so that we
              may continue to excel in our market. Our clients deserve our best,
              &amp; we want to make sure our best is better every year.
            </p>
          </div>
        </article>

        <article className="story-card story-card--reverse">
          <div className="story-image">
            <img src={ImageList} alt="Home with a pool and mountain views" />
          </div>
          <div className="story-copy">
            <span>02</span>
            <h3>Don't Just List it...</h3>
            <p>
              Get it SOLD! We exhaust every avenue to ensure our listings are at
              the fingertips of every possible buyer, getting you top dollar for
              your home.
            </p>
          </div>
        </article>

        <article className="story-card">
          <div className="story-image">
            <img src={GuideImg} alt="House keys on a wooden surface" />
          </div>
          <div className="story-copy">
            <span>03</span>
            <h3>Guide to Buyers</h3>
            <p>
              Nobody knows the market like we do. Enjoy having a pro at your
              service. Market analysis, upgrades lists, contractors on speed
              dial, &amp; more!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ArticleSection;
