import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <h3 className="contact">Contact</h3>
        <h5 className="text">
          Let's talk design, music and the magic in between 🎶
        </h5>
      </div>
      <div className="footerRight">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/tlee016/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tiff.lee016@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a
            href="https://open.spotify.com/user/12170244834?si=a89b8a471ea54a22"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
