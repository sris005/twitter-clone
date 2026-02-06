import { useState } from "react";
import TweetCard from "../components/TweetCard";

export default function Home() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  const postTweet = () => {
    if (!tweet.trim()) return;
    setTweets([{ id: Date.now(), text: tweet }, ...tweets]);
    setTweet("");
  };

  const deleteTweet = (id) => {
    const confirmDelete = window.confirm("Delete this tweet?");
    if (!confirmDelete) return;

    setTweets(tweets.filter((t) => t.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Tweet box */}
      <div className="bg-white rounded-xl p-4 shadow">
        <textarea
          placeholder="What's happening?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          className="w-full border rounded-lg p-3 resize-none focus:outline-none"
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={postTweet}
            className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600"
          >
            Tweet
          </button>
        </div>
      </div>

      {/* Tweets */}
      {tweets.map((t) => (
        <TweetCard
          key={t.id}
          text={t.text}
          onDelete={() => deleteTweet(t.id)}
        />
      ))}
    </div>
  );
}
