import Header from "./components/Header";
import { useState, useEffect } from 'react';

function App() {
  const [search, SetSearch] = useState("");
  const [animeList, SetAnimelist] = useState([]);
  const [topAnime, setTopAnime] = useState([]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
