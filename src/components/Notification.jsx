export default function Notification({ message, type }) {
  if (!message) return null;

  return (
    <div
      className={`p-3 mb-3 rounded ${
        type === "error" ? "bg-red-200" : "bg-green-200"
      }`}
    >
      {message}
    </div>
  );
}
