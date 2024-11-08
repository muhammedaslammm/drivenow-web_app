import { Link } from "react-router-dom";

let Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to="/">
            drive<b>now</b>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
