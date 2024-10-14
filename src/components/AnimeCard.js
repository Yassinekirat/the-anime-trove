import React from 'react';

function AnimeCard({ anime }) {
  const { url, title, images } = anime;
  const imageUrl = images.webp.large_image_url || images.jpg.large_image_url || images.jpg.image_url;

  return (
    <article className='anime-card'>
      <a href={url} target='_blank' rel='noreferrer'>
        <figure>
          <img src={imageUrl} alt={title} />
        </figure>
        <h3 className='anime-title'>{title}</h3> {/* Added a class for potential styling */}
      </a>
    </article>
  );
}

export default AnimeCard;
