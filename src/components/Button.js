import React, { useState } from 'react';

export default function ButtonComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = `bg-white py-2 px-4 border border-gray-300 rounded-full transition-colors duration-300 ${isHovered ? 'bg-gray-100' : ''}`;

  return (
    <button
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Button
    </button>
  );
}