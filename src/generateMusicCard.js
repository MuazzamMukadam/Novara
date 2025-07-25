import html2canvas from "html2canvas";

export async function generateMusicCard(trackName) {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(trackName)}&entity=song&limit=1`
  );
  const data = await res.json();
  const track = data.results[0];

  if (!track) {
    alert("No song found!");
    return;
  }
let artworkUrl;
const fallbackTracks = [
  {
    name: "the night we met",
    id: "5yJaXWIErrrsjQ3J0eR5aK",
    artist:"lord huron"
  },
  {
    name: "back to friends",
    id: "0FTmksd2dxiE5e3rWyJXs6",
    artist:"sombr"
  },
  {
    name: "die with a smile",
    id: "2plbrEY59IikOBgBGLjaoe",
    artist:"bruno mars"
  }
];

function normalize(str) {
  return str?.toLowerCase().trim().replace(/\s+/g, " ") || "";
}

for (const fallback of fallbackTracks) {
  if (
    normalize(track.trackName).includes(fallback.name) &&
    normalize(track.artistName).includes(fallback.artist)
  ) {
    try {
      const res = await fetch(
        `https://open.spotify.com/oembed?url=https://open.spotify.com/track/${fallback.spotifyId}`
      );
      const spotifyData = await res.json();

      if (spotifyData.thumbnail_url) {
        artworkUrl = spotifyData.thumbnail_url.replace(
          "ab67616d00001e02",
          "ab67616d0000b273"
        ); // upgrade to better res
      }
    } catch (e) {
      console.warn("Spotify fetch failed for fallback:", e);
    }
    break; // stop after first match
  }
}

// Fallback to iTunes if not assigned
if (!artworkUrl) {
  artworkUrl = track.artworkUrl100.replace(/\/\d+x\d+bb\.jpg$/, "/600x600bb.jpg");
}

  // UI Creation
  const card = document.createElement("div");
  card.style.width = "360px";
  card.style.padding = "24px";
  card.style.fontFamily = "'Poppins', sans-serif";
  card.style.color = "white";

  const gradients = [
    "linear-gradient(135deg, #1f0036, #3f0071, #ff0099)",
    "linear-gradient(135deg, #ff5252ff, #0079e2ff)",
    "linear-gradient(135deg, #8e2de2, #4a00e0, #ffd700)"
  ];
  card.style.background = gradients[Math.floor(Math.random() * gradients.length)];
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.gap = "16px";
  card.style.boxShadow = "0 0 30px #ff00ff80, 0 0 50px #00ffff60, 0 0 80px #ff009960";

  const img = document.createElement("img");
  img.crossOrigin = "anonymous";
  img.src = artworkUrl;
  img.style.width = "180px";
  img.style.height = "180px";
  img.style.borderRadius = "16px";
  img.style.objectFit = "cover";
  img.style.boxShadow = "0 8px 30px rgba(255, 0, 150, 0.6)";

  const vibe = document.createElement("p");
  vibe.innerText = "👋🏻 Hey, I'm vibing to";
  vibe.style.fontSize = "16px";
  vibe.style.margin = "0";
  vibe.style.opacity = "0.9";

  const title = document.createElement("h2");
  title.innerText = track.trackName;
  title.style.margin = "0";
  title.style.borderRadius = "12px";
  title.style.padding = "4px 8px";
  title.style.display = "inline-block";
  title.style.fontSize = "22px";
  title.style.background = "linear-gradient(90deg, #ff0000, #ffd700)";
  title.style.webkitBackgroundClip = "text";
  title.style.webkitTextFillColor = "transparent";
  title.style.fontWeight = "bold";

  const artist = document.createElement("p");
  artist.innerText = `by ${track.artistName} 🔥`;
  artist.style.margin = "0";
  artist.style.fontSize = "14px";
  artist.style.opacity = "0.85";

  const nva = document.createElement("h3");
  nva.innerText = `on NOVARA`;
  nva.style.margin = "0";
  nva.style.fontSize = "14px";
  nva.style.opacity = "1";
  nva.style.textDecoration = "underline wavy white";
  nva.style.color = "#00ffee";
  nva.style.textShadow = "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff";

  const footer = document.createElement("p");
  footer.innerText = "🌐 novara-music.vercel.app";
  footer.style.fontSize = "12px";
  footer.style.opacity = "0.8";
  footer.style.marginTop = "12px";

  const mn = document.createElement("p");
  mn.innerText = "© NOVARA";
  mn.style.fontSize = "12px";
  mn.style.opacity = "0.8";
  mn.style.marginTop = "4px";

  // Add to card
  card.appendChild(img);
  card.appendChild(vibe);
  card.appendChild(title);
  card.appendChild(artist);
  card.appendChild(nva);
  card.appendChild(footer);
  card.appendChild(mn);

  img.onload = () => {
    document.body.appendChild(card);
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        const canvas = await html2canvas(card, {
          useCORS: true
        });

        const link = document.createElement("a");
        link.download = `Novara Song Card.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();

        document.body.removeChild(card);
      });
    });
  };

  img.onerror = () => {
    alert("Failed to load album cover.");
  };
}
