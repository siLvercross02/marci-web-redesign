import Partners1 from "../assets/partners-1.webp";
import Partners2 from "../assets/partners-2.webp";
import Partners3 from "../assets/partners-3.webp";
import Partners4 from "../assets/partners-4.webp";

const partners = [
  {
    image: Partners1,
    name: "The Ridge Realty Group",
  },
  {
    image: Partners2,
    name: "Equal Housing Opportunity",
  },
  {
    image: Partners3,
    name: "REALTOR®",
  },
  {
    image: Partners4,
    name: "Pahrump Valley Chamber of Commerce",
  },
];

const PartnerSection = () => {
  return (
    <section className="affiliations" aria-label="Professional affiliations">
      <div className="affiliations__container">
        <div className="affiliations__heading">
          <span className="affiliations__eyebrow">TRUSTED CONNECTIONS</span>

          <h2>
            Proudly Connected With
            <span> Industry Leaders</span>
          </h2>

          <p>
            We're proud to be affiliated with organizations that share our
            commitment to professionalism, integrity, and exceptional service.
          </p>
        </div>

        <div className="affiliations__grid">
          {partners.map((partner) => (
            <div className="affiliations__card" key={partner.name}>
              <div className="affiliations__logo">
                <img src={partner.image} alt={partner.name} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
