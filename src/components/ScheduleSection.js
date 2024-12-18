import React from 'react';
import scheduleDataJson from '../resource/scheduleData.json';

const ScheduleSection = ({ onSpeakerClick }) => {
  const { scheduleData } = scheduleDataJson;
  
  return (
    <div id="schedule" className="schedule-section py-16 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl mb-10 text-green-700 text-center">
        Schedule<br/>
        大會議程
      </h1>
      
      <div className="w-11/12 max-w-5xl">
        <div className="grid grid-cols-1 gap-1 bg-gray-100 rounded-lg overflow-hidden">
          {scheduleData.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] bg-white p-5 border-b border-gray-200">
              <div className="text-gray-700 bg-green-100 font-medium text-lg p-2 rounded">
                {item.time}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  {item.type && (
                    <span className="bg-green-700 text-white px-2 py-1 rounded text-sm">
                      {item.type}
                    </span>
                  )}
                  <h3 
                    className="m-0 text-xl cursor-pointer"
                    onClick={() => {
                      onSpeakerClick(item.speaker);
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                {item.speaker && (
                  <div 
                    className="text-gray-600 text-sm mt-1 cursor-pointer"
                    onClick={() => {
                      onSpeakerClick(item.speaker);
                    }}
                  >
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