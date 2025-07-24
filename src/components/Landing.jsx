import './Landing.css';
import Header from './Header';
import { useState } from 'react';


import Happy from '../moods/Happy';
import Sad from '../moods/Sad';
import Energetic from '../moods/Energetic';
import Chill from '../moods/Chill';
import Romantic from '../moods/Romantic';
import Moody from '../moods/Moody';

function Landing() {
  const [selectedMood, setSelectedMood] = useState('');

  const renderMoodComponent = () => {
    switch (selectedMood) {
      case 'happy':
        return <Happy />;
      case 'sad':
        return <Sad />;
      case 'energetic':
        return <Energetic />;
      case 'chill':
        return <Chill />;
      case 'romantic':
        return <Romantic />;
      case 'moody':
        return <Moody />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="top-center-blend"></div>
      <Header />

      <div className="mood-container">
        <label htmlFor="mood-select" className="mood-label">Select your mood:</label>
        <select
          id="mood-select"
          className="mood-dropdown"
          onChange={(e) => setSelectedMood(e.target.value)}
        >
          <option value="">-- Choose --</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="energetic">Energetic</option>
          <option value="chill">Chill</option>
          <option value="romantic">Romantic</option>
          <option value="moody">Moody</option>
        </select>
      </div>

      <div className="mood-display">{renderMoodComponent()}</div>
    </>
  );
}

export default Landing;
