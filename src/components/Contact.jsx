import { useState } from "react";
import MapSection from "./MapSection";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  const [formSent, setFormSent] = useState(false);

  const submitContact = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setFormSent(true);
  };

  return (
    <section className="contact section-pad" id="contact">
      <div className="section-heading section-heading--center">
        <p className="eyebrow">Get in touch</p>
        <h2>Call or Visit</h2>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={submitContact}>
          <h3>Send Message</h3>
          <label>
            <span>Name</span>
            <input name="name" required />
          </label>
          <label>
            <span>Email*</span>
            <input name="email" type="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit">
            Send <FaArrowRightLong />
          </button>
          {formSent && (
            <p className="form-success" role="status">
              Your message has been sent.
            </p>
          )}
          <small>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </small>
        </form>

        <div className="visit-details">
          <h3>Marci Metzger - THE RIDGE REALTY GROUP</h3>
          <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
          <a href="tel:2069196886">(206) 919-6886</a>
          <h3>Office Hours</h3>
          <div className="hours">
            <span>Open today</span>
            <strong>08:00 am – 07:00 pm</strong>
          </div>
          <div className="hours">
            <span>Open daily</span>
            <strong>8:00 am - 7:00 pm</strong>
          </div>
          <p>
            Appointments outside office hours available upon request. Just call!
          </p>
        </div>
      </div>

      {/* Map */}
      <MapSection
        latitude={36.2083}
        longitude={-115.9839}
        locationName="Marci Metzger - The Ridge Realty Group"
        address="3190 HW-160, Suite F, Pahrump, Nevada 89048, United States"
      />
    </section>
  );
};

export default Contact;
