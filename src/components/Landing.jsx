import { useEffect, useState } from 'react';
import './Landing.css';

function Landing() {
  const [songs, setSongs] = useState([]);

useEffect(() => {
  fetch('http://localhost:4000/api/tracks')
    .then((res) => res.json())
    .then((data) => {
      console.log("Full response:", data);
      setSongs(data);
    });
}, []);

  return (
    <div className="lc">
      {songs.map((song, idx) => {
        return (
          <a
            href={song.external}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="card-link"
          >
            <div className="card">
              <img src={song.image} alt={song.name} className="cover" />
              <h3>{song.name}</h3>
              <p>{song.artist}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Landing;
