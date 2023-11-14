import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
