import { useState } from "react";
import "./Gif.css";

function Gif() {
  const [showIcon, setShowIcon] = useState(false);

  const handleClick = () => {
    setShowIcon(true);
    setTimeout(() => {
      setShowIcon(false);
    }, 1000); // Remove after animation
  };

  return (
    <div className="gif-container" onClick={handleClick}>
     /* <img src="/mpg.gif" className="mg" alt="music gif" />*/
<div class="music-wave">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
      {showIcon && (
        <div className="music-icon">🎹🎧</div>
      )}
    </div>
  );
}

export default Gif;
