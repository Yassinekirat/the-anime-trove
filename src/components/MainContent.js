import React from 'react';
import { Grid, TextField, Box } from '@mui/material'; // Import necessary components
import AnimeCard from './AnimeCard';

function MainContent({ HandleSearch, search, SetSearch, animeList }) {
  return (
    <main>
      <Grid container spacing={2} justifyContent="center" alignItems="center" 
            sx={{ height: '8vh' }} // Adjust height of the search bar container if needed
      >
        <Grid item xs={12} sm={6} md={4}>
          {/* Set the Box size here to control the entire search box */}
          <Box 
            component="form" 
            className='search-box' 
            onSubmit={HandleSearch} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              padding: '10px', // Add padding around the search box
              borderRadius: '20px', // Optional: round the entire box
              backgroundColor: 'black', // Background color for the entire box
              border: '1px solid red',
              width: '115%'
            }}
          >
            <TextField 
              type='search'
              placeholder='Search for an anime...'
              required
              value={search}
              onChange={(e) => SetSearch(e.target.value)}
              fullWidth
              variant="outlined" // Use outlined variant for a defined border
              sx={{
                // Remove height adjustment from here
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent', // Make the border of the TextField transparent
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent', // Change border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent', // Change border color when focused
                  },
                },
                // Set background and text color
                backgroundColor: 'black', // Black background for the input
                color: 'white', // White text color
                '& .MuiInputBase-input': {
                  color: 'white', // Input text color
                  fontSize: '16px', // Adjust font size for the input text
                  padding: '10px', // Adjust padding inside the TextField for more space
                },
                // Optional: Set placeholder text color
                '& .MuiInputBase-input::placeholder': {
                  color: 'lightgrey', // Light grey placeholder color
                },
                borderRadius: '20px', // Adjust border radius for the TextField to match the Box
                // Remove margin from here to prevent misalignment
              }}
            />
          </Box>
        </Grid>
      </Grid>

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
