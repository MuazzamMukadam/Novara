import './App.css';
import React from "react";

import Landing from './components/Landing';
import { useState, useEffect } from "react";
import Introscreen from './components/Introscreen';
function App() {
  const [isIntroVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(false);
    }, 3000); 

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      {/* {isIntroVisible ? <Introscreen /> : <Landing />} */}

  <button
    onClick={async () => {
      const trackId = "7ne4VBA60CxGM75vw0EYad";
      try {
        const res = await fetch(`/api/spotify/track/${trackId}`);
        if (!res.ok) throw new Error("Failed to fetch track data");
        const data = await res.json();

        const canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 200;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#1DB954";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#fff";
        ctx.font = "22px Arial";
        ctx.fillText(data.name, 20, 50);
        ctx.font = "18px Arial";
        ctx.fillText(`By: ${data.artists}`, 20, 90);

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = data.albumArt;

        img.onload = () => {
          ctx.drawImage(img, canvas.width - 170, 20, 150, 150);

          const link = document.createElement("a");
          link.download = `${data.name}_vibecard.png`;
          link.href = canvas.toDataURL("image/png");
          link.click();
        };

        img.onerror = () => alert("Failed to load album art.");
      } catch (error) {
        alert("Error generating vibe card: " + error.message);
      }
    }}
  >
    Download Vibe Card
  </button>


    </>
  );
}
export default App;


