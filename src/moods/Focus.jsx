
import './Focus.css';

const trackIds = [
"6pWgRkpqVfxnj3WuIcJ7WP",
"6ZFbXIJkuI1dVNWvzJzown"
];

function Focus() {
  return (
    <>
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

export default Focus;
