import { useState } from "react";

export default function TweetCard({ text, onDelete }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-gray-800">{text}</p>

      <div className="flex gap-6 text-sm mt-3 items-center">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${
            liked ? "text-red-500" : "text-gray-500"
          }`}
        >
          ❤️ {count}
        </button>

        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
