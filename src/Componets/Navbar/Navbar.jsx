import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
