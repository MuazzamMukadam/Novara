import './Happy.css';

const trackIds = [
  "7qiZfU4dY1lWllzX7mPBI3", // Ed Sheeran - Shape of You
  "3tjFYV6RSFtuktYl3ZtYcq", // mood
  "0VjIjW4GlUZAMYd2vXMi3b", // The Weeknd - Blinding Lights
  "4uLU6hMCjMI75M1A2tKUQC", //never gonna give you up

];

function Happy() {
  return (
    <>
    <div className="happy-bg">
      {trackIds.map((id, index) => (
        <iframe
          key={index}
          src={`https://open.spotify.com/embed/track/${id}`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ))}</div>
    </>
  );
}

export default Happy;
