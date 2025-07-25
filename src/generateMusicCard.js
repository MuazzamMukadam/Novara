import html2canvas from "html2canvas";

export async function generateMusicCard(trackName) {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      trackName
    )}&entity=song&limit=1`
  );
  const data = await res.json();
  const track = data.results[0];

  if (!track) {
    alert("No song found!");
    return;
  }

  // Upgrade image URL to 600x600
  const artworkUrl = track.artworkUrl100.replace(/\/\d+x\d+bb\.jpg$/, "/600x600bb.jpg");

  const card = document.createElement("div");
  card.style.width = "360px";
  card.style.padding = "24px";
  card.style.fontFamily = "'Poppins', sans-serif";
  card.style.color = "white";
  card.style.background = "linear-gradient(135deg, #1f0036, #3f0071, #ff0099)";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.gap = "16px";
  card.style.boxShadow =
    "0 0 30px #ff00ff80, 0 0 50px #00ffff60, 0 0 80px #ff009960";

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
  nva.style.color = "#00ffee"; // Final value, not overwritten now
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

  // Append all
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
          useCORS: true,
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
    alert("Failed to load album cover due to CORS.");
  };
}
