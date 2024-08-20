import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-footer7 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-logo1">
            {/* <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer-logo2"
            /> */}
          </div>
          <div className="footer-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer-text16 thq-body-small">Home</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer-text18 thq-body-small">Services</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer-text15 thq-body-small">About Us</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer-text19 thq-body-small">Contact Us</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer-text14 thq-body-small">Blog</span>
            </a>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <div className="footer-container">
              <span className="thq-body-small">
                © 2024 Abroad Educational Consultancy
              </span>
            </div>
            <div className="footer-footer-links">
              <span>
                <span className="footer-text21 thq-body-small">
                  Privacy Policy
                </span>
              </span>
              <span>
                <span className="footer-text17 thq-body-small">
                  Terms and Conditions
                </span>
              </span>
              <span>
                <span className="footer-text20 thq-body-small">
                  Cookies Policy
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
