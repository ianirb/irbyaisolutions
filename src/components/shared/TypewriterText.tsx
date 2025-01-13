import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypewriterText({ text, className = '', delay = 100 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);
    
    return () => clearInterval(intervalId);
  }, [text, delay]);
  
  return (
    <span className={`${className} inline-block`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}