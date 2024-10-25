import React, { useState } from 'react';
import './App.css';  

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=64a180b1`)
      .then((response) => response.json())
      .then((value) => {
      setData(value.Search) ;
      });
  };

  
  return (
    <div className="app">
      <center>
        <h1>Search Your Favorite Movie</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter movie name"
            className="input-field"
          />
          <br />
          <br />
          <input type="submit" value="Search" className="submit-btn" />
        </form>
        <div className="movie-grid">
          {data?.length >= 1
            ? data.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="movie-poster"
                  />
                  <div className="movie-details">
                    <h4>{movie.Title}</h4>
                    <button
                      className="download-btn">
                      Download Poster
                    </button>
                  </div>
                </div>
              ))
            : null}
        </div>
      </center>
    </div>
  );
};

export default App;
