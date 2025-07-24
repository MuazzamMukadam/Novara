import './Sad.css';

const trackIds = [
  "2pUpNOgJBIBCcjyQZQ00qU"
];

function Sad() {
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

export default Sad;

