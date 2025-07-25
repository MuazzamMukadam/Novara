import './App.css';
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
      {isIntroVisible ? <Introscreen /> : <Landing />}
    </>
  );
}
export default App;
