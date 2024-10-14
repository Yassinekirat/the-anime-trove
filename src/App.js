import Header from "./components/Header";
import { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";


function App() {
  const [topAnime, setTopAnime] = useState([]);

  const GetTopAnime = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=9');
      const data = await response.json();
      
      // Filter out NSFW anime
      const filteredData = data.data.filter(anime => !anime.nsfw);
      
      setTopAnime(filteredData || []);
    } catch (error) {
      console.error("Error fetching top anime:", error);
    }
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
      </div>
    </div>
  );
}

export default App;
