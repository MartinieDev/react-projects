import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 appearance-none rounded-full border border-transparent bg-yellow-100 px-4 py-2 text-sm outline-none transition-[width, box-shadow] duration-300 placeholder:text-sm placeholder:text-stone-400 sm:focus:w-72 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500/50 sm:w-64
"
      />
    </form>
  );
}

export default SearchOrder;
