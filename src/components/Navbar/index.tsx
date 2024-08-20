import "./navbar.css";

const Navbar: React.FC = () => {
  const navOptions = [
    {
      key: "home",
      displayName: "Home",
      link: "/",
    },
    {
      key: "services",
      displayName: "Services",
      link: "/",
    },
    {
      key: "about_us",
      displayName: "About Us",
      link: "/",
    },
    {
      key: "contact_us",
      displayName: "Contact Us",
      link: "/",
    },
  ];
  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        {/* <img
          alt={props.logoAlt}
          src={props.logoSrc} Need to work on this
          className="navbar8-image1"
        /> */}
        {navOptions.map((ele) => (
          <a href={ele.link} key={ele.key}>
            <span className="navbar8-text14 thq-link thq-body-small">
              {ele.displayName}
            </span>
          </a>
        ))}
      </header>
    </header>
  );
};

export default Navbar;
