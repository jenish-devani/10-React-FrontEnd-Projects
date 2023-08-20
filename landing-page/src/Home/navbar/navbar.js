import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src="./images/brand_logo.png" alt="" />
      <ul className="navMenu">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button type="button">Login</button>
    </div>
  );
}

export default Navbar;
