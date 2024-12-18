import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/SpeakersSection.css';
import speakers from '../resource/speaker.json';
import { FaGithub, FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';

function SpeakersSection({ selectedSpeaker }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (selectedSpeaker) {
      const index = speakers.findIndex(speaker => speaker.nickname === selectedSpeaker);
      setExpandedIndex(index);
      if (index !== -1 && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedSpeaker]);

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
    <section id="speakers" className="speakers-section" ref={sectionRef}>
      <h2 className="text-4xl md:text-5xl text-center">SPEAKERS 講者資訊</h2>
      <div className="speakers-list mt-8">
        {speakers.map((speaker, index) => (
          <div 
            key={index} 
            className={`speaker-row ${expandedIndex === index ? 'expanded' : ''}`}
          >
            <div className="speaker-main-content">
              <div className="speaker-info">
                <div className="speaker-image min-h-[120px]">
                  {speaker.image ? (
                    <img src={speaker.image} className="w-[120px] h-[120px] object-cover" alt={speaker.nickname} />
                  ) : (
                    <div className="placeholder-image" />
                  )}
                </div>
                <div className="speaker-details">
                  <h3 className="text-lg md:text-xl">{speaker.nickname}</h3>
                  <div className="social-links">
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
              <button 
                className={`expand-button ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="speaker-description">
              <p className="mb-4">{speaker.introduction}</p>
              {speaker.topic && (
                <div className="speaker-title">
                  <h4>題目：</h4>
                  <p><strong>{speaker.topic}</strong></p>
                </div>
              )}
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