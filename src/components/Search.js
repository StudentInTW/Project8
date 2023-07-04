import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        onChange={inputHandler}
        onKeyDown={handleKeyDown}
        className="input"
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
