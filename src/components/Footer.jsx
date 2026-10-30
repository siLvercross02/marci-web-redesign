import Logo from "../assets/marci-logo.webp";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Marci Metzger Homes" />
      <div className="footer-links">
        <a href="#home">Facebook</a>
        <a href="#home">Instagram</a>
        <a href="#home">LinkedIn</a>
        <a href="#home">Yelp</a>
      </div>
      <p>Copyright © 2026 Marci Metzger - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
