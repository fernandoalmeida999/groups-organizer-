import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="brand">My School App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/groups">Groups</Link>
        </nav>
      </div>
    </header>
  );
}
