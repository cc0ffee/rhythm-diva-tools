import { useState } from 'react';
import SongCard from './components/SongCard'
import Header from './components/Header'
import SongList from './assets/songs.json'

const TOTAL_CARDS_DRAWN = 9;

const getRandomSongs = (songs: any[], count: number) => {
  const shuffled = songs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function App() {
  const [songs, setSongs] = useState<any[]>([]);

  const handleSongs = () => {
    const randomSongs = getRandomSongs(SongList, TOTAL_CARDS_DRAWN);
    setSongs(randomSongs);
  }

  return (
    <div className="">
      <Header action={handleSongs}/>
      <div className="flex flex-wrap justify-center bg-neutral-900 ">
        <br/><br/>
        {songs.map((song, index)=>{
          return(<SongCard key={song.title + index + Math.random()} image={song.imageUrl} title={song.title} artist={song.Artist} bpm={song.BPM} producer={song.Producer} difficulty={song.Difficulty} color="bg-gray-900"/>)
        })}
      </div>
    </div>
  );
}

export default App;
