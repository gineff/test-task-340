import { useState, useEffect } from 'react';

export const useToken = () => {
  const [token, setTokenState] = useState<string>(() => {
    return localStorage.getItem('token') || '';
  });

  const setToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem('token', newToken);
      setTokenState(newToken);
    } else {
      localStorage.removeItem('token');
      setTokenState('');
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setTokenState(localStorage.getItem('token') || '');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { token, setToken };
};
