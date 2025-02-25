import "./FooterStyle.scss";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  console.log(year);

  return (
<footer>
  <div className="footer-wrapper">
    <div className="top-footer">
      <Link to="/" className="logo-wrapper">
        <img src="\src\assets\Adobe Express - file.png" alt="website logo" />
        <span>Books</span>
      </Link>

      <div className="elements-wrapper">
        <div className="element-wrapper">
          <div className="header">ABOUT</div>
          <div className="links-wrapper">
            <Link to="/about/books">Books</Link>
            <Link to="/about/tools">Tools</Link>
          </div>
        </div>

        <div className="element-wrapper">
          <div className="header">FOLLOW US</div>
          <div className="links-wrapper">
            <a href="https://github.com/JokubasG537" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>

        <div className="element-wrapper">
          <div className="header">LEGAL</div>
          <div className="links-wrapper">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
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