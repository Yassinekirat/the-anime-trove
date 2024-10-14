import Header from "./components/Header";
import { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";


function App() {
  const [animeList, SetAnimelist] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

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
      </div>
    </div>
  );
}
export default App;
