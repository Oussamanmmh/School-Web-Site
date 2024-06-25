import React from 'react';


const flags = [
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80', alt: 'UK Flag' }, // English
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80', alt: 'French Flag' }, // French
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80', alt: 'Spanish Flag' }, // Spanish
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80', alt: 'German Flag' } // German
];

const RotatingFlags = () => {
  return (
    <div className="relative flex items-center justify-center h-64 w-64">
      {flags.map((flag, index) => (
        <div
          key={index}
          className={`absolute w-16 h-16 transform rotate-[${index * 90}deg] origin-[50%_200%]`}>
          <img src={flag.src} alt={flag.alt} className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default RotatingFlags;
