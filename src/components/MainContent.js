import React from 'react';
import AnimeCard from './AnimeCard';

function MainContent({ HandleSearch, search, SetSearch, animeList }) {
  return (
    <main>
      <div className='main-head'>
        <form className='search-box' onSubmit={HandleSearch}>
          <input 
            type='search'
            placeholder='Search for an anime...' 
            required // Makes the input mandatory before form submission
            value={search} // Links the input value to the current search term (controlled component)
            onChange={(e) => SetSearch(e.target.value)} // Updates the search term as the user types
          />
        </form>
      </div>

      <div className='anime-list'>
        {animeList.length > 0 ? (
          animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} /> // Renders each anime as an AnimeCard, using mal_id as a unique key
          ))
        ) : (
          <p>No anime found.</p> // Fallback message when no anime matches the search query
        )}
      </div>
    </main>
  );
}

export default MainContent;
