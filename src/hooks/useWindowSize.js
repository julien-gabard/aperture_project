import { useEffect, useState } from 'react';

/**
 * Listen for the window resizing event and return the width
 * @return {Number} Window width size
 */
export const useWindowSize = () => {
  const [widthSize, setWidthSize] = useState({
    windowWidthSize: window.innerWidth,
  });
  
  const changeWindowSize = () => {
    setWidthSize({ windowWidthSize: window.innerWidth });
  }
  
  useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return widthSize;
};