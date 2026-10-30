import { useState } from "react";
import ListingImg from "../assets/listing-image.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const ListingSection = () => {
  const [searchMessage, setSearchMessage] = useState("");

  const submitSearch = (event) => {
    event.preventDefault();
    setSearchMessage("Your selected listing search is ready.");
  };

  return (
    <section className="listing-search" id="listing">
      <img src={ListingImg} alt="" aria-hidden="true" />
      <div className="listing-overlay" />
      <div className="listing-inner">
        <div className="listing-title">
          <p className="eyebrow eyebrow--light">Search Listings</p>
          <h2>Find Your Dream Home</h2>
        </div>
        <form className="search-form" onSubmit={submitSearch}>
          <label>
            <span>Location</span>
            <select name="location" defaultValue="any">
              <option value="any">Any</option>
              <option value="pahrump">Pahrump</option>
            </select>
          </label>
          <label>
            <span>Type</span>
            <select name="type" defaultValue="any">
              <option value="any">Any</option>
              <option value="home">Home</option>
              <option value="land">Land</option>
            </select>
          </label>
          <label>
            <span>Sort By</span>
            <select name="sort" defaultValue="new">
              <option value="new">Newest</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </label>
          <label>
            <span>Bedrooms</span>
            <select name="beds" defaultValue="any">
              <option value="any">Any Number</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </label>
          <label>
            <span>Baths</span>
            <select name="baths" defaultValue="any">
              <option value="any">Any Number</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </label>
          <label>
            <span>Min Price</span>
            <input name="minPrice" inputMode="numeric" />
          </label>
          <label>
            <span>Max Price</span>
            <input name="maxPrice" inputMode="numeric" />
          </label>
          <button type="submit">
            Search Now <FaArrowRightLong />
          </button>
        </form>
        {searchMessage && (
          <p className="search-message" role="status">
            {searchMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default ListingSection;
