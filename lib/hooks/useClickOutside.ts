import { useEffect, RefObject } from 'react';

/**
 * Hook that detects clicks outside of the specified element(s)
 * @param refs Array of refs to elements to detect clicks outside of
 * @param callback Function to call when a click outside is detected
 */
export function useClickOutside(
  refs: Array<RefObject<HTMLElement | null>> | RefObject<HTMLElement | null>,
  callback: () => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Convert single ref to array for consistent handling
      const refsArray = Array.isArray(refs) ? refs : [refs];
      
      // Check if click was outside all refs
      const isOutside = refsArray.every(ref => {
        return !ref.current || !ref.current.contains(event.target as Node);
      });
      
      if (isOutside) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);
}

export default useClickOutside; 