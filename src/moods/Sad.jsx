import "./Sad.css";

const trackIds = [
  "2pUpNOgJBIBCcjyQZQ00qU",
  "7bPWdJgx8vek7S5i5yAtvG",
  "6GGtHZgBycCgGBUhZo81xe",
  "7qEHsqek33rTcFNT9PFqLf",
  "3JvKfv6T31zO0ini8iNItO",
  "3QaPy1KgI7nu9FJEQUgn6h",
  "0FTmksd2dxiE5e3rWyJXs6",
  "5yJaXWIErrrsjQ3J0eR5aK",
  "2plbrEY59IikOBgBGLjaoe",
];

function Sad() {
  return (
    <>
      <h2 className="song-count">Total Sad Songs: {trackIds.length}</h2>
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

export default Sad;
