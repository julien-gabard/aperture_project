import { useEffect } from 'react';

/**
 * Modify the content of the title tag
 * @param {string} title Title that will be displayed in the browser tab
 */
export const useTitle = (title) => {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = 'Aperture Project';
    }
  });
};