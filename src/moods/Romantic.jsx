import './Romantic.css';

const trackIds = [
  "2262bWmqomIaJXwCRHr13j", //sailor
  "7ne4VBA60CxGM75vw0EYad", // that's so true
  "6lanRgr6wXibZr8KgzXxBl" // a thousand years


];

function Romantic() {
  return (
    <>    <div className="romantic-bg">

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

export default Romantic;
