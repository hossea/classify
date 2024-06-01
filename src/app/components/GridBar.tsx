'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const GridBar = () => {
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const toggleExpanded = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const images = [
    { src: '/top.png', date: '01', month: 'January', year: '2023', header: 'Header 1', text: 'Text for Image 1', width: 500, height: 300 },
    { src: '/desk.png', date: '15', month: 'February', year: '2023', header: 'Header 2', text: 'Text for Image 2', width: 500, height: 300 },
    { src: '/clean.png', date: '20', month: 'March', year: '2023', header: 'Header 3', text: 'Text for Image 3', width: 500, height: 300 },
    { src: '/book.png', date: '05', month: 'April', year: '2023', header: 'Header 4', text: 'Text for Image 4', width: 500, height: 300 },
  ];

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', minHeight: '50vh' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        {images.map((image, index) => (
          <div 
            key={index} 
            style={{ 
              flex: 1, 
              textAlign: 'center', 
              padding: '20px', 
              border: '1px solid #ccc', 
              borderRadius: '10px', 
              margin: '10px' 
            }}
          >
            <Image 
              src={image.src} 
              alt={`Image ${index + 1}`} 
              width={image.width} 
              height={image.height} 
              style={{ 
                width: '100%', 
                maxHeight: '200px', 
                objectFit: 'cover', 
                borderRadius: '10px' 
              }} 
            />
            <p>{image.date} {image.month} {image.year}</p>
            <h3 style={{ fontWeight: 700 }}>{image.header}</h3>
            <p>{image.text}</p>
            {!expanded[index] ? (
              <button className='read-btn' onClick={() => toggleExpanded(index)}>Read more</button>
            ) : (
              <>
                <p>This code will create a bar with a white background that includes two profile images on the left side and text content on the right side. The profile images are arranged in a grid, and the text includes a heading, subheading, and a list of features with check marks. {index + 1}...</p>
                <button onClick={() => toggleExpanded(index)}>Show less</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBar;
