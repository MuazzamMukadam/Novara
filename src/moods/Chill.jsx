import "./Chill.css";

const trackIds = [
  "4h9wh7iOZ0GGn8QVp4RAOB",
  "3KkXRkHbMCARz0aVfEt68P",
  "6UelLqGlWMcVH1E5c4H7lY",
  "5jsw9uXEGuKyJzs0boZ1bT",
  "4Q0qVhFQa7j6jRKzo3HDmP",
  "6WkJ2OK163XXS2oARUC9JM",
  "1zi7xx7UVEFkmKfv06H8x0",
  "0GONea6G2XdnHWjNZd6zt3",
];

function Chill() {
  return (
    <>
      <h2 className="song-count">Total Chill Songs: {trackIds.length}</h2>

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

export default Chill;
