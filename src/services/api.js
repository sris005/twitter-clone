const API_URL = "PASTE_YOUR_MOCKAPI_URL_HERE";

export const getTweets = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addTweet = async (tweet) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tweet),
  });
};

export const deleteTweet = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const likeTweet = async (id, likes) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes }),
  });
};
