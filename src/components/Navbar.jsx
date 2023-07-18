import { Link } from 'react-router-dom';
import logo from '../images/PickleballLogo.png';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="navbar-right">
        <button className={`navbar-toggle-btn ${open ? 'active' : ''}`} onClick={handleToggle}>
          <FaBars />
        </button>

        <ul className={`navbar-links ${open ? 'active' : ''}`}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
