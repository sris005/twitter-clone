import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f8fa]">
      <Navbar />

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 px-4 py-6">
        <div className="col-span-12 lg:col-span-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Right sidebar */}
        <div className="hidden lg:block col-span-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-bold mb-3">Trends for you</h3>
            <p className="text-sm text-gray-600">#ReactJS</p>
            <p className="text-sm text-gray-600">#Frontend</p>
            <p className="text-sm text-gray-600">#Internship</p>
          </div>
        </div>
      </div>
    </div>
  );
}
