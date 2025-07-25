import "./Sad.css";
import { generateMusicCard } from "../generateMusicCard"; // make sure path is correct

const tracks = [
  {
    id: "2pUpNOgJBIBCcjyQZQ00qU",
    name: "Shape of You",
  },
  {
    id: "7bPWdJgx8vek7S5i5yAtvG",
    name: "Mood",
  },
  {
    id: "6GGtHZgBycCgGBUhZo81xe",
    name: "Blinding Lights",
  },
  {
    id: "7qEHsqek33rTcFNT9PFqLf",
    name: "Never Gonna Give You Up rick astley",
  },
  {
    id: "3JvKfv6T31zO0ini8iNItO",
    name: "Never Gonna Give You Up rick astley",
  },
  {
    id: "3QaPy1KgI7nu9FJEQUgn6h",
    name: "Never Gonna Give You Up rick astley",
  },
  {
    id: "0FTmksd2dxiE5e3rWyJXs6",
    name: "Never Gonna Give You Up rick astley",
  },
  {
    id: "5yJaXWIErrrsjQ3J0eR5aK",
    name: "Never Gonna Give You Up rick astley",
  },
  {
    id: "2plbrEY59IikOBgBGLjaoe",
    name: "Never Gonna Give You Up rick astley",
  },
];

function Sad() {
  return (
    <div className="sad-bg">
      <h2 className="song-count">Total Sad Songs: {tracks.length}</h2>

      {tracks.map((track) => (
        <div key={track.id} style={{ marginBottom: "30px" }} className="float-wrapper">
          <iframe
            src={`https://open.spotify.com/embed/track/${track.id}`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <button
            className="download-btn"
            onClick={() => generateMusicCard(track.name)}
          >
            <span>Flex This Track  <i class="fa-solid fa-download"></i> </span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Sad;
