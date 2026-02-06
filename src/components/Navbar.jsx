import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">Mini Twitter</h1>

        <div className="flex gap-8 font-medium">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/explore" className="hover:text-blue-500">
            Explore
          </NavLink>
          <NavLink to="/profile" className="hover:text-blue-500">
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
