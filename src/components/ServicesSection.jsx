import Services1 from "../assets/services-1.webp";
import Services2 from "../assets/services-2.webp";
import Services3 from "../assets/services-3.webp";

const ServicesSection = () => {
  return (
    <>
      <section className="services section-pad">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">How we can help</p>
          <h2>Our Services</h2>
        </div>
        <div className="services-grid">
          <article>
            <img src={Services1} alt="Styled residential living room" />
            <span>01</span>
            <h3>Real Estate Done Right</h3>
            <p>
              Nervous about your property adventure? Don’t be. Whether you're
              getting ready to buy or sell your residence, looking at investment
              properties, or just curious about the markets, our team ensures
              you get the best experience possible!
            </p>
          </article>
          <article>
            <img src={Services2} alt="Modern residential property" />
            <span>02</span>
            <h3>Commercial &amp; Residential</h3>
            <p>
              Large or small, condo or mansion, we can find it and get at the
              price that's right. Fixer-uppers? Luxury? We can help with all of
              it! We live, work, and play in this community. Happy to help you
              find where to put your hard-earned dollars.
            </p>
          </article>
          <article>
            <img
              src={Services3}
              alt="Clients meeting with a real estate professional"
            />
            <span>03</span>
            <h3>Rely on Expertise</h3>
            <p>
              If you have questions about affordability, credit, and loan
              options, trust us to connect you with the right people to get the
              answers you need in a timely fashion. We make sure you feel
              confident and educated every step of the way.
            </p>
          </article>
        </div>
      </section>

      <aside className="social-bar" aria-label="Social media">
        <a href="#home" aria-label="Facebook">
          f
        </a>
        <a href="#home" aria-label="Instagram">
          ◎
        </a>
        <a href="#home" aria-label="LinkedIn">
          in
        </a>
        <a href="#home" aria-label="Yelp">
          y
        </a>
      </aside>
    </>
  );
};

export default ServicesSection;
