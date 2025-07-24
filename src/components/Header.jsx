import './Header.css';
import { useState } from 'react';

function Header() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <header className="glass-header">
        <div className="logo-container">
          <img src="nl.webp" alt="Logo" className="logo" />
          <h1 className="app-name">NOVARA</h1>
        </div>

        <div className="right-icon" onClick={() => setShowAbout(true)}>
          <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
            10-4.48 10-10S17.52 2 12 2zm0 15h-1v-6h2v6h-1zm0-8h-1V7h2v2h-1z"/>
          </svg>
        </div>
      </header>

      {showAbout && (
        <div className="about-popup">
          <div className="about-content">
            <button className="close-btn" onClick={() => setShowAbout(false)}>×</button>
            <h2>About <span className='anv'>NOVARA</span></h2>
            <p>Hey ! It's Muazzam . <br></br>Novara is a mood-based music discovery 
            platform that lets users select how they feel
             and instantly get curated songs to match. With a sleek, minimalist 
             UI, Novara makes music selection fast, aesthetic, and vibe-driven. No sign-up walls, no fluff , just pure mood-matching tunes 
             in one click. Songs redirect seamlessly to Spotify, so you can dive straight into the vibe. </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
