import { useState, useEffect } from 'react';

export const useSystemBoot = (duration: number = 1500) => {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooted(true);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return booted;
};
