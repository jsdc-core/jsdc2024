import React from 'react';
import scheduleDataJson from '../resource/scheduleData.json';

const ScheduleSection = () => {
  const { scheduleData } = scheduleDataJson;
  
  return (
    <div className="schedule-section" style={{
      padding: '60px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{
        fontSize: '48px',
        marginBottom: '40px',
        color: '#2E8B57'
      }}>
        大會議程
      </h1>
      
      <div style={{
        width: '85%',
        maxWidth: '1200px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          {scheduleData.map((item, index) => (
            <div key={index} style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              backgroundColor: 'white',
              padding: '20px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{
                color: '#333',
                fontWeight: '500',
                fontSize: '18px'
              }}>
                {item.time}
              </div>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  {item.type && (
                    <span style={{
                      backgroundColor: '#2E8B57',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '16px'
                    }}>
                      {item.type}
                    </span>
                  )}
                  <h3 style={{
                    margin: '0',
                    fontSize: '20px'
                  }}>
                    {item.title}
                  </h3>
                </div>
                {item.speaker && (
                  <div style={{
                    color: '#666',
                    fontSize: '16px',
                    marginTop: '4px'
                  }}>
                    {item.speaker}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection; 