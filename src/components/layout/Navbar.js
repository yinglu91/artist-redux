import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-microphone"></i> ArtistConnector
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/artist">Artist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
