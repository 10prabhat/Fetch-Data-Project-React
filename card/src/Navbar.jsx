import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        FetchData
      </div>
      <div className="hamburger">
        <ul>
          <li>Home</li>
          <li>Contacts</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
