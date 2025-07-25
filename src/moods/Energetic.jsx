import "./Energetic.css";

const trackIds = ["0FIDCNYYjNvPVimz5icugS"];

function Energetic() {
  return (
    <>
      <h2 className="song-count">Total Energetic Songs: {trackIds.length}</h2>

      {trackIds.map((id, index) => (
        <iframe
          key={index}
          src={`https://open.spotify.com/embed/track/${id}`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ))}
    </>
  );
}

export default Energetic;
