import "./Landing.css";
import Header from "./Header";
import Carousel from "./Carousel";
import { useState, lazy, Suspense } from "react";


const LazyHappy = lazy(() => import("../moods/Happy"));
const LazySad = lazy(() => import("../moods/Sad"));
const LazyEnergetic = lazy(() => import("../moods/Energetic"));
const LazyChill = lazy(() => import("../moods/Chill"));
const LazyRomantic = lazy(() => import("../moods/Romantic"));
const LazyMoody = lazy(() => import("../moods/Moody"));
const LazyGif = lazy(() => import("../moods/Gif"));

function Landing() {
  const [selectedMood, setSelectedMood] = useState("choose");

  const renderMoodComponent = () => {
    switch (selectedMood) {
      case "choose":
        return <LazyGif />;
      case "happy":
        return <LazyHappy />;
      case "sad":
        return <LazySad />;
      case "energetic":
        return <LazyEnergetic />;
      case "chill":
        return <LazyChill />;
      case "romantic":
        return <LazyRomantic />;
      case "moody":
        return <LazyMoody />;
      default:
        return null;
    }
  };
 


  return (
    <> 
      <div className="top-center-blend"></div>
     
      <Header />

      <h2 className="mtfu">Music that feels you.</h2>
      <br></br>
      <h4 className="suv">Select your vibe. We'll set the mood.</h4>
      <Carousel />
      <div className="mood-container">
        <label htmlFor="mood-select" className="mood-label">
          Select your mood:
        </label>
        <select
          id="mood-select"
          className="mood-dropdown"
          onChange={(e) => setSelectedMood(e.target.value)}
        >
          <option value="choose"> Choose Mood </option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="energetic">Energetic</option>
          <option value="chill">Chill</option>
          <option value="romantic">Romantic</option>
          <option value="moody">Moody</option>
        </select>
      </div>

      <div className="mood-display">
        <Suspense fallback={<p>Loading mood...</p>}>
          {renderMoodComponent()}
        </Suspense>
      </div>
    </>
  );
}

export default Landing;
