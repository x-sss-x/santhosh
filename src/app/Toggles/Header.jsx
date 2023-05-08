import React from 'react';
import Image from 'next/image';

const MyComponent = () => {
  return (
    <div
      style={{
        backgroundColor: '#2F88FF',
        width: 'auto',
        height: '130px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <div style={{ borderRadius: '40px' }}>
        <Image
          src="/../public/Images/Logo.png"
          alt="Logo"
          width={180}
          height={80}
        />
      </div>
    </div>
  );
};

export default MyComponent;
