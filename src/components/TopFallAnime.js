import React from 'react';
import Accordion from './Accordion/Accordion';
import AccordionItem from './Accordion/AccordionItem';

function TopFallAnime({ topFallAnime }) {
  const truncateTitle = (title) => {
    return title.length > 25 ? title.slice(0, 25) + '...' : title;
  };

  return (
    <div className="top-fall-anime">
      <h2>best Anime of the Season</h2>
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
