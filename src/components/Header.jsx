import React from "react";// Import React library


// Header component for the app
function Header() {
  return (
    <header className="app-header">
      <h1 className="title"> Bot Battlr</h1>
      {/* App tagline */}
      <p className="tagline">
        Build your ultimate bot army and conquer the galaxy!
      </p>
    </header>
  );
}

export default Header;// Export Header component
