import React, { useState } from 'react';
import '../styles/components/SpeakersSection.css';
import speakers from '../resource/speaker.json';
import { FaGithub, FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';

function SpeakersSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getSocialIcon = (url) => {
    if (url.includes('github.com')) {
      return <FaGithub />;
    } else if (url.includes('facebook.com')) {
      return <FaFacebook />;
    } else if (url.includes('instagram.com')) {
      return <FaInstagram />;
    } else {
      return <FaGlobe />;
    }
  };

  return (
    <section id="speakers" className="speakers-section">
      <h2 style={{ fontSize: '48px', textAlign: 'center' }}>SPEAKERS 講者資訊</h2>
      <div className="speakers-list" style={{ marginTop: '2rem' }}>
        {speakers.map((speaker, index) => (
          <div 
            key={index} 
            className={`speaker-row ${expandedIndex === index ? 'expanded' : ''}`}
          >
            <div className="speaker-main-content">
              <div className="speaker-info">
                <div className="speaker-image">
                  {speaker.image ? (
                    <img src={speaker.image} alt={speaker.nickname} />
                  ) : (
                    <div className="placeholder-image" />
                  )}
                </div>
                <div className="speaker-details" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h3 style={{ textAlign: 'center', minWidth: '150px' }}>{speaker.nickname}</h3>
                  <div className="social-links" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    {speaker.other && speaker.other.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        {getSocialIcon(link)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="speaker-title">
                <h4>{speaker.topic}</h4>
              </div>
              <button 
                className={`expand-button ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="speaker-description">
              <p>{speaker.introduction}</p>
              {speaker.outline && (
                <div className="speaker-outline">
                  <h4>概述：</h4>
                  <p>{speaker.outline?.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < speaker.outline.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpeakersSection; 