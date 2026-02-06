export default function Profile() {
  return (
    <div className="bg-white rounded-xl p-6 shadow space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
          S
        </div>

        <div>
          <h2 className="text-xl font-bold">Shrasti</h2>
          <p className="text-gray-500">@frontend_dev</p>
        </div>
      </div>

      <p className="text-gray-700">
        Frontend Developer | React | Tailwind | Learning everyday 🚀
      </p>

      <div className="flex gap-6 text-sm text-gray-600">
        <span><b>12</b> Tweets</span>
        <span><b>120</b> Followers</span>
        <span><b>80</b> Following</span>
      </div>
    </div>
  );
}
