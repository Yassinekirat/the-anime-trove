import React from 'react';
import { Grid, Typography } from '@mui/material'; // Import necessary Material-UI components

function Sidebar({ topAnime }) {
  // Helper function to render content based on the state of topAnime
  const renderTopAnime = () => {
    if (!Array.isArray(topAnime)) {
      return <Typography>No Top Anime Available</Typography>; // Handle case if topAnime isn't an array
    }

    if (topAnime.length === 0) {
      return <Typography>Loading...</Typography>; // Show a loading message while waiting for data
    }

    return (
      <Grid container spacing={2} direction="column"> {/* Use Grid container for column layout */}
        {topAnime.map((anime) => (
          <Grid item key={anime.mal_id} xs={12}> {/* Full width for each item */}
            <div className="anime-item-wrapper">
              <a
                href={anime.url}
                target="_blank"
                rel="noreferrer"
                className="anime-item" // Added a class to target in SCSS
                style={{
                  backgroundImage: `url(${anime.images.webp.large_image_url || anime.images.jpg.large_image_url})`,
                  backgroundSize: 'cover', // Ensure background covers the entire element
                  height: '120px', // Set a fixed height for the image
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  position: 'relative',
                }}
                aria-label={anime.title} // Added aria-label for accessibility
              >
                <span className="sr-only">{anime.title}</span> {/* Visually hidden text */}
              </a>
              <Typography variant="h6" align="center" className="anime-title">
                {/* Check the length of the title and truncate if necessary */}
                {anime.title.length > 15 ? `${anime.title.slice(0, 20)}...` : anime.title}
              </Typography> {/* Title outside of the image */}
            </div>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <aside>
      <nav>
        <Typography 
          variant="h5" // Use a larger font size
          component="h3" 
          align="center" // Center the title
          style={{
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 'bold', // Make the title bold
            color: '#ff0000', // Change the color to red for visibility
            marginBottom: '20px', // Add some space below the title
          }}
        >
          <strong>Top Anime</strong>
        </Typography>
        {renderTopAnime()} {/* Display the top anime */}
      </nav>
    </aside>
  );
}

export default Sidebar;
