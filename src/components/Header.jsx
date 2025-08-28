import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">The planets</Link>
      </h1>
      <Navbar />
    </header>
  );
}
