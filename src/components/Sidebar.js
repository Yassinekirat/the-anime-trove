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
      <div className="anime-item-wrapper" key={anime.mal_id}>
        <a
          href={anime.url}
          target="_blank"
          rel="noreferrer"
          className="anime-item" // Added a class to target in SCSS
          style={{
            backgroundImage: `url(${anime.images.webp.large_image_url || anime.images.jpg.large_image_url})`,
          }}
          aria-label={anime.title} // Added aria-label for accessibility
        >
          <span className="sr-only">{anime.title}</span> {/* Visually hidden text */}
        </a>
        <h4>{anime.title}</h4> {/* Title outside of the image */}
      </div>
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
