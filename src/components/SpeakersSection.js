import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/components/SpeakersSection.css';

const speakers = [
  {
    name: 'To Be Announced',
    title: 'Coming Soon',
    image: null,
  },
  {
    name: 'To Be Announced',
    title: 'Coming Soon',
    image: null,
  },
  {
    name: 'To Be Announced',
    title: 'Coming Soon',
    image: null,
  },
  {
    name: 'To Be Announced',
    title: 'Coming Soon',
    image: null,
  },
  {
    name: 'To Be Announced',
    title: 'Coming Soon',
    image: null,
  }
];

function SpeakersSection() {
  return (
    <section className="speakers-section">
      <h2 style={{ fontSize: '48px' }}>UPCOMING SPEAKERS</h2>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
      >
        {speakers.map((speaker, index) => (
          <SwiperSlide key={index}>
            <div className="speaker-card" style={{ opacity: 0.6 }}>
              <div className="speaker-image">
                {speaker.image ? (
                  <img src={speaker.image} alt={speaker.name} />
                ) : (
                  <div className="placeholder-image" />
                )}
              </div>
              <h3>{speaker.name}</h3>
              <p>{speaker.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SpeakersSection; 