// theme.js
import {useEffect, useState} from 'react';
import {Appearance} from 'react-native';

export const useTheme = () => {
  const [theme, setTheme] = useState('LIGHT'); // Default to LIGHT theme

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setTheme('DARK');
    } else {
      setTheme('LIGHT');
    }
  }, []);

  return theme;
};
