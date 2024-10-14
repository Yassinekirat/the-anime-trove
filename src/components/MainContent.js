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
            required
            value={search}
            onChange={(e) => SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className='anime-list'>
        {animeList.length > 0 ? (
          animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))
        ) : (
          <p>No anime found.</p> // Add fallback when no results
        )}
      </div>
    </main>
  );
}

export default MainContent;
