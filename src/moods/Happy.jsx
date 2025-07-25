import "./Happy.css";
import { generateMusicCard } from "../generateMusicCard"; // make sure path is correct

const tracks = [
  {
    id: "7qiZfU4dY1lWllzX7mPBI3",
    name: "Shape of You",
  },
  {
    id: "3tjFYV6RSFtuktYl3ZtYcq",
    name: "Mood",
  },
  {
    id: "0VjIjW4GlUZAMYd2vXMi3b",
    name: "Blinding Lights",
  },
  {
    id: "4uLU6hMCjMI75M1A2tKUQC",
    name: "Never Gonna Give You Up",
  },
];

function Happy() {
  return (
    <div className="happy-bg">
      <h2 className="song-count">Total Happy Songs: {tracks.length}</h2>

      {tracks.map((track, index) => (
        <div key={track.id} style={{ marginBottom: "30px" }}>
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
            Download Card
          </button>
        </div>
      ))}
    </div>
  );
}

export default Happy;
