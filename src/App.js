import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './components/HomePage';
import HostSection from './components/HostSection';
import ScheduleSection from './components/ScheduleSection';
import SpeakersSection from './components/SpeakersSection';
import Footer from './components/Footer';

function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleSpeakerClick = (speakerName) => {
    setSelectedSpeaker(speakerName);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <HomePage />
          <HostSection id="hosts" />
          <ScheduleSection onSpeakerClick={handleSpeakerClick} />
          <SpeakersSection selectedSpeaker={selectedSpeaker} />
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
