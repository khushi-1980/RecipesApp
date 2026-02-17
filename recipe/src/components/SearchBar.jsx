import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search recipe..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
