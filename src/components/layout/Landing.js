import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/opera" className="btn btn-primary">
              Opera
            </Link>
            <Link to="/artist" className="btn btn-primary">
              Pop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
