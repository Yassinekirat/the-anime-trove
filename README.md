TheAnimeTrove
TheAnimeTrove is a React-based web application that allows users to search and discover anime from the Jikan API. Users can browse through timeless anime lists and find information about different shows. This project also implements dynamic styling and animations to enhance user experience.

Table of Contents
Project Overview
Features
Project Architecture
Technologies Used
Setup Instructions
Usage Guidelines
Contributing
License
Project Overview
TheAnimeTrove provides a platform for anime enthusiasts to:

Browse a curated list of top timeless anime.
Search for specific anime using keywords.
View details of the anime by clicking on the anime card, which opens the official anime page.
Features
Anime Search: Users can search for any anime by name using the search bar.
Anime List: Display a list of top anime with cover images, titles, and links.
Responsive Design: The app is fully responsive, adapting to different screen sizes.
Styled Components: Leveraging SCSS for custom styles and hover effects.
Project Architecture
Frontend
React: The core UI is built using React.
Components:
Sidebar.js: Displays a list of timeless anime with cover images and titles.
MainContent.js: Contains the search functionality and displays anime results dynamically.
AnimeCard.js: Displays individual anime details with images and titles.
Backend (API)
The project fetches anime data from the Jikan API, which acts as the backend for retrieving information about anime.

Technologies Used
React: UI framework for building components and handling state.
SCSS: Styling with enhanced features such as variables and nesting.
Webpack: Module bundler for managing dependencies and optimizing assets.
Jikan API: A RESTful API for accessing anime-related data from MyAnimeList.
Setup Instructions
Prerequisites
Node.js (v12 or higher) and npm installed on your machine.
Steps to Run the Project
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/TheAnimeTrove.git
Navigate to the project directory:
bash
Copy code
cd TheAnimeTrove
Install the dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to view the app.
Styling
To modify styles, edit the main.scss file located in the src/assets/scss directory. Live Sass Compiler is used for compiling SCSS into CSS in the development process.

Usage Guidelines
Search Anime: Enter the name of the anime you're looking for in the search bar and hit enter. The results will appear in the main content area.
Browse Anime: Click on any anime from the sidebar or search results to open its official page on MyAnimeList.
Contributing
If you'd like to contribute to this project:

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-name).
Open a pull request.
License
This project is open-source and licensed under the MIT License.
