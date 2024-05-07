import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <a href="/">
          <img src="/photos/logo.png" alt="Logo" />
        </a>
      </div>
      <a href="https://tiffanylee.me/playground">Playground</a>
      <a href="https://tiffanylee.me/">Work</a>
      <a href="https://tiffanylee.me/about">About</a>
    </nav>
  );
}

export default Navbar;
