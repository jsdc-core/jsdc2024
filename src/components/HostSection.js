import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/components/HostSection.css';

const speakers = [
  {
    name: 'Lois',
    title: 'Web Developer, React Developer, JavaScript Developer',
    image: '/images/host/cropped_image_1.jpg',
  },
  {
    name: '張維元',
    title: 'JavaScript Developer, Mathematics, Data Science, Machine Learning',
    image: '/images/host/cropped_image_2.jpg',
  },
  {
    name: 'Caesar',
    title: 'JavaScript Developer, Node.js Developer, JavaScript Developer',
    image: '/images/host/cropped_image_3.jpg',
  },
  // Add more speakers as needed
];

function SpeakersSection() {
  return (
    <section id="hosts" className="host-section">
      <h2 style={{ fontSize: '48px', fontWeight: 'bold' }}>Host Members</h2>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
      >
        {speakers.map((speaker, index) => (
          <SwiperSlide key={index}>
            <div className="host-card">
              <div className="host-image">
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