import Header from "./components/Header";
import { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import TopFallAnime from "./components/TopFallAnime";


function App() {
  const [animeList, SetAnimelist] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [topFallAnime, setTopFallAnime] = useState([]);
  const [search, SetSearch] = useState("");

  // Fetch top anime
  const GetTopAnime = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=6');
      const data = await response.json();
      
      // Filter out NSFW anime
      const filteredData = data.data.filter(anime => !anime.nsfw);
      
      setTopAnime(filteredData || []);
    } catch (error) {
      console.error("Error fetching top anime:", error);
    }
  };

// Fetch top fall anime (seasonal) with SFW filter
  const GetTopFallAnime = async () => {
    try {
        const response = await fetch('https://api.jikan.moe/v4/seasons/2024/fall?limit=12&sfw=true');
        const data = await response.json();
        console.log("Top Fall Anime Data:", data); // Log the entire response
        setTopFallAnime(data.data || []); // Safely set topFallAnime
    } catch (error) {
        console.error("Error fetching top fall anime:", error);
    }
  };

  // Fetch anime based on search query
  const FetchAnime = async (query) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=start_date&sort=desc&limit=20&sfw=true`);
      const data = await response.json();
      if (data.data) {
        SetAnimelist(data.data);
      } else {
        console.error("No anime results found.");
      }
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  };
  

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  useEffect(() => {
    GetTopAnime();
    GetTopFallAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent 
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
        <TopFallAnime topFallAnime={topFallAnime} />
      </div>
    </div>
  );
}

export default App;
