import { useEffect, useState } from "react"

/**
 * listen to the position of the document scroll
 * @param {Number} element Element position
 * @return {boolean}
 */
export const useScroll = ({ element }) => {
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    if (element === null) {
      return;
    }

    const handleScroll = () => {
      const scrollCheck = window.scrollY > element;

      if (scrollCheck !== scroll) {
        setScroll(!scroll);
      }
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [scroll, setScroll, element])

  return {
    scroll
  };
}