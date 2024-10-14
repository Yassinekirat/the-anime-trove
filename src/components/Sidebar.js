import React from 'react';

function Sidebar({ topAnime }) {
  // Helper function to render content based on the state of topAnime
  const renderTopAnime = () => {
    if (!Array.isArray(topAnime)) {
      return <p>No Top Anime Available</p>; // Handle case if topAnime isn't an array
    }

    if (topAnime.length === 0) {
      return <p>Loading...</p>; // Show a loading message while waiting for data
    }

    return topAnime.map((anime) => (
      <a
        href={anime.url}
        target="_blank"
        key={anime.mal_id}
        rel="noreferrer"
      >
        {anime.title}
      </a>
    ));
  };

  return (
    <aside>
      <nav>
      <h3><strong>Timeless Anime</strong></h3>
        {renderTopAnime()} {/* Display the top anime */}
      </nav>
    </aside>
  );
}

export default Sidebar;
