import './Header.css';

function Header() {
  return (
    <header className="glass-header">
      <div className="logo-container">
        <img src="NovaraLogo.webp" alt="Logo" className="logo" />
        <h1 className="app-name">NOVARA</h1>
      </div>
    </header>
  );
}

export default Header;
