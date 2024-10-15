import Header from "./components/Header";
import { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import TopFallAnime from "./components/TopFallAnime";
import Navbar from './components/Navbar'; // Importing the Navbar component
import { gapi } from 'gapi-script';

const clientId = "524908122716-cme5p4ko8ui4hshl33vt46o9asga12cg.apps.googleusercontent.com";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [topFallAnime, setTopFallAnime] = useState([]);
  const [search, setSearch] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const getTopAnime = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=6');
      const data = await response.json();
      const filteredData = data.data.filter(anime => !anime.nsfw);
      setTopAnime(filteredData || []);
    } catch (error) {
      console.error("Error fetching top anime:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTopFallAnime = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.jikan.moe/v4/seasons/2024/fall?limit=11&sfw=true');
      const data = await response.json();
      console.log("Top Fall Anime Data:", data);
      setTopFallAnime(data.data || []);
    } catch (error) {
      console.error("Error fetching top fall anime:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAnime = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=start_date&sort=desc&limit=20&sfw=true`);
      const data = await response.json();
      if (data.data) {
        setAnimeList(data.data);
      } else {
        console.error("No anime results found.");
      }
    } catch (error) {
      console.error("Error fetching anime:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const handleLogout = () => {
    // Placeholder for handleLogout, passed to Navbar as a prop
    console.log("User logged out");
  };

  useEffect(() => {
    getTopAnime();
    getTopFallAnime();
  }, []);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar loggedIn={false} onLogout={handleLogout} userProfile={null} /> {/* Simplified for now */}
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent 
          HandleSearch={handleSearch}
          search={search}
          SetSearch={setSearch}
          animeList={animeList}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <TopFallAnime topFallAnime={topFallAnime} />
        )}
      </div>
    </div>
  );
}

export default App;
