import Navbar from "./Navbar.jsx";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <Navbar />
      <h1 className="text-3xl font-extrabold text-center p-4 mt-6">
        Deploy a React Site to GitHub Pages
      </h1>
    </header>
  );
}
