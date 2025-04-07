import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 200 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      setIndex((prev) => {
        if (prev === text.length - 1) {
          setTimeout(() => {
            setDisplayedText('');
            setIndex(0);
          }, 300); 
        }
        return (prev + 1) % (text.length + 1);
      });
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
