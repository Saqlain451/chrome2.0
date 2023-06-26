import React, { useState } from "react";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${searchVal}`;
  };

  return (
    <>
      <div className="searh-form">
        <form onSubmit={handleSubmit}>
          <div className="search">
            <div className="txt-feild">
              <img src="assets/search.png" alt="search" />
              <input
                type="search"
                name="search"
                autoComplete="off"
                placeholder="Search Anything.."
                value={searchVal}
                onChange={handleChange}
              />
              <img src="assets/google-voice (2).png" alt="google voice" id="voice-icon" />
            </div>
            <button className="search-btn" aria-label="search">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
