import './Romantic.css';

const trackIds = [
  "2262bWmqomIaJXwCRHr13j", //sailor
  "7ne4VBA60CxGM75vw0EYad", // that's so true
  "6lanRgr6wXibZr8KgzXxBl" ,// a thousand years
"5O2P9iiztwhomNh8xkR9lJ",
"3be9ACTxtcL6Zm4vJRUiPG", "1Y3LN4zO1Edc2EluIoSPJN", "2eAvDnpXP5W0cVtiI0PUxV"

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
