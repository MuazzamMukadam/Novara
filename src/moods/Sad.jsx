import "./Sad.css";
import { generateMusicCard } from "../generateMusicCard"; // make sure path is correct

const tracks = [
  {
    id: "2pUpNOgJBIBCcjyQZQ00qU",
    name: "Let Her go passenger",
  },
  {
    id: "7bPWdJgx8vek7S5i5yAtvG",
    name: "Chemtrails over the country club",
  },
  {
    id: "6GGtHZgBycCgGBUhZo81xe",
    name: "say yes to heaven",
  },
  {
    id: "7qEHsqek33rTcFNT9PFqLf",
    name: "someone you loved",
  },
  {
    id: "3JvKfv6T31zO0ini8iNItO",
    name: "another love",
  },
  {
    id: "3QaPy1KgI7nu9FJEQUgn6h",
    name: "wildflower billie eilish",
  },
  {
    id: "0FTmksd2dxiE5e3rWyJXs6",
    name: "back to friends sombr",
  },
  {
    id: "5yJaXWIErrrsjQ3J0eR5aK",
    name: "the night we met",
  },
  {
    id: "2plbrEY59IikOBgBGLjaoe",
    name: "die with a smile bruno mars",
  }
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
