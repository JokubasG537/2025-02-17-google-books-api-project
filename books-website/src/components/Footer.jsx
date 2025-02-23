import "./FooterStyle.scss";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="top-footer">
          <div className="logo-wrapper">
            <img src="../assets/Adobe Express - file.png" alt="website logo" />
            <span>Books</span>
          </div>
          <div className="elements-wrapper">
            <div className="element">
              <div className="header">ABOUT</div>
              <Link to="/about/books">Books</Link>
              <Link to="/about/tools">Tools</Link>
            </div>
            <div className="element">
              <div className="header">FOLLOW US</div>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
            <div className="element">
              <div className="header">LEGAL</div>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="copyright">© {year} Books™</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;