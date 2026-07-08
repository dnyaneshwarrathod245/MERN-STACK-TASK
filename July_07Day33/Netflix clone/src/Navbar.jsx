import "./Navbar.css";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <FaBars className="menu" />
        <h1 className="logo">NETFLIX</h1>
      </div>

      <div className="right">
        <button className="signin">Sign In</button>
      </div>
    </nav>
  );
}