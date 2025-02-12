import { useState } from 'react';

export const useToken = () => {
  const isBrowser = typeof window !== 'undefined';

  const [token, setTokenState] = useState<string>(() => {
    return (isBrowser && localStorage.getItem('token')) || '';
  });

  const setToken = (newToken: string | null) => {
    if (isBrowser) {
      if (newToken) {
        localStorage.setItem('token', newToken);
      } else {
        localStorage.removeItem('token');
      }
      setTokenState(newToken || '');
    }
  };

  return { token, setToken };
};
