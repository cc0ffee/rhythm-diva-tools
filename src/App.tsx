import SongCard from './components/SongCard'
import SongList from './assets/songs.json'
function App() {
  return (
    <>
      DivaTools
      <br/><br/>
      {SongList.map((song, index)=>{
        return(<div><SongCard key={index} image={song.imageUrl} title={song.title} artist={song.Artist} bpm={song.BPM} producer={song.Producer} difficulty={song.Difficulty}/></div>)
      })}
    </>
  )
}

export default App
