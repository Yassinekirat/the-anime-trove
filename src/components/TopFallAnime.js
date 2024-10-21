import React from 'react';
import Accordion from './Accordion/Accordion';
import AccordionItem from './Accordion/AccordionItem';

function TopFallAnime({ topFallAnime }) {
  // Truncates the title if it exceeds 25 characters
  const truncateTitle = (title) => {
    return title.length > 25 ? title.slice(0, 25) + '...' : title;
  };

  return (
    <div className="top-fall-anime">
      {/* Title for the section displaying the best anime of the season */}
      <h2>Best Anime of the Season</h2>
      <Accordion>
        {topFallAnime.length > 0 ? (
          topFallAnime.map((anime) => (
            <AccordionItem key={anime.mal_id} title={truncateTitle(anime.title)}>
              <a href={anime.url} target="_blank" rel="noopener noreferrer">
                <img src={anime.images.jpg.image_url} alt={anime.title} />
              </a>
            </AccordionItem>
          ))
        ) : (
          <p>No fall anime found.</p>
        )}
      </Accordion>
    </div>
  );
}

export default TopFallAnime;
