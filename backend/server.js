// server/server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = "";
let tokenExpiresAt = 0;

const getAccessToken = async () => {
  if (accessToken && Date.now() < tokenExpiresAt) return accessToken;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  accessToken = data.access_token;
  tokenExpiresAt = Date.now() + data.expires_in * 1000;

  return accessToken;
};

app.get("/api/tracks", async (req, res) => {
  const token = await getAccessToken();

  const trackIds = [
    "3n3Ppam7vgaVa1iaRUc9Lp",
    "7qiZfU4dY1lWllzX7mPBI3",
    "1rgnBhdG2JDFTbYkYRZAku",
    "7bPWdJgx8vek7S5i5yAtvG",
  ];

  const spotifyRes = await fetch(
    `https://api.spotify.com/v1/tracks?ids=${trackIds.join(",")}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await spotifyRes.json();
  const tracks = data.tracks.map((track) => ({
    name: track.name,
    artist: track.artists[0]?.name,
    image: track.album.images[0]?.url,
    preview: track.preview_url,
    external: track.external_urls.spotify,
  }));

  res.json(tracks);
});

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
